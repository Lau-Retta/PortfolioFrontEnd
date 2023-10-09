import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { JwtDto } from '../modelo/JwtDto';
import { LoginRequest } from '../modelo/request/loginRequest';
import { NewUser } from '../modelo/request/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURl = 'http://localhost:8080/auth/';
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<JwtDto> = new BehaviorSubject<JwtDto>({ token: '', username: '', role: '' });

  constructor(private httpClient: HttpClient) { }



  //login de usuario
  public login(user: LoginRequest): Observable<JwtDto> {

    return this.httpClient.post<JwtDto>(this.authURl + "login", user)
      .pipe(tap(userData => {
        //cargamos los datos del usuario traidos desde el back
        this.currentUserData.next(userData);
        //indica que usuario esta logueado
        this.currentUserLoginOn.next(true);


      }),
        catchError(this.handleError));

  }

  get userData(): Observable<JwtDto> {
    return this.currentUserData.asObservable();
  }

  //registro de usuario 
  public register(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURl + 'register', newUser).pipe(tap(userData => {

      this.currentUserLoginOn.next(true);


    }),
      catchError(this.handleError));
  }



  //manejo de errores
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log("Se ha producido un error", error.error);

    }
    else {
      console.log("El back retorno el código de estasdo", error.status, error, error);

    }
    return throwError(() => new Error("Algo fallo, intente nuvamente"));
  }
}
