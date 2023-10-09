import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<Trabajos>(this.EXP_URL + `/detail/${id}`)
  }
  //guardar una nueva experiencia
  public save(trabajo: Trabajos):Observable<any>{
    return this.httpClient.post<any>(this.EXP_URL+`/crear`, trabajo);
  }
  //editar una experiencia
  public update(id:number, trabajo:Trabajos):Observable<any>{
    return this.httpClient.put<any>(this.EXP_URL+`/editar/${id}`, trabajo);
  }
  //borrar una experiencia
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.EXP_URL+`/borrar/${id}`);
  }
}
