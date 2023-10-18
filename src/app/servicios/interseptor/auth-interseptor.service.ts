import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterseptorService {

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let intReq = req;
      const token = window.sessionStorage.getItem("jwt");
      if(token != null){
          intReq = req.clone({
              headers: req.headers.set('Authorization','Bearer '+token)
          });
      }
      return next.handle(intReq).pipe(
        catchError((error) => {
          if (error.status === 500) { // Unauthorized (Token expired)
            // Clear sessionStorage
            window.sessionStorage.clear();
            // Redirect to the main page (you can replace '/main' with your desired route)
            window.location.href = '/inicio';
          }
          return throwError(error);
          
        })
        );
      }
    }
export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterseptorService,
  multi: true }];