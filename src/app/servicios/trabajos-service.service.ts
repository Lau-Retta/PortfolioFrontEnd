import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajos } from '../modelo/Trabajo.modelo';

@Injectable({
  providedIn: 'root'
})
export class TrabajosServiceService {
  EXP_URL = 'http://localhost:8080/Trabajos';
 
  

  constructor(private httpClient: HttpClient) { }

  //traemos todos los trabajos
  public getTrabajo():Observable<Trabajos[]>{
    return this.httpClient.get<Trabajos[]>(this.EXP_URL+'/lista');
  }

  //obtenemos el id del trabajo
  public detail(id:number):Observable<Trabajos>{
    return this.httpClient.get<Trabajos>(this.EXP_URL + `/traer/${id}`)
  }
  //guardar una nueva experiencia
  public save(trabajo: Trabajos):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.post<any>(this.EXP_URL+`/crear`, trabajo, { headers });
  }
  //editar una experiencia
  public update(id:number, trabajo:Trabajos):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.put<any>(this.EXP_URL+`/editar/${id}`, trabajo, {headers});
  }
  //borrar una experiencia
  public delete(id:number):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.delete<any>(this.EXP_URL+`/borrar/${id}`,{headers});
  }
}
