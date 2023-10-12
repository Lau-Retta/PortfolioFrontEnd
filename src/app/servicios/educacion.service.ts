import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Educacion} from'../modelo/Educacion.modelo';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  EDU_URL = 'http://localhost:8080/Educacion'

  constructor(private httpClient: HttpClient) { }

  //traemos todos las educaciones
  public getEducacion():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.EDU_URL+'/lista');
  }

   //obtenemos el id del educacion
   public detail(id:number):Observable<Educacion>{

    return this.httpClient.get<Educacion>(this.EDU_URL + `/traer/${id}`)
  }
  //guardar una nueva educacion
  public save(educacion: Educacion):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.post<any>(this.EDU_URL+`/crear`, educacion, { headers });
  }
  //editar una educacion
  public update(id:number, educacion:Educacion):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.put<any>(this.EDU_URL+`/editar/${id}`, educacion, {headers});
  }
  //borrar una educacion
  public delete(id:number):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.delete<any>(this.EDU_URL+`/borrar/${id}`,{headers});
  }

}
