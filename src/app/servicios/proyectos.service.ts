import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelo/Proyecto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyect_URL= 'http://localhost:8080/Proyectos';
  constructor(private httpClient : HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proyect_URL+'/lista');
  }

   //obtenemos proyecto x id
   public detail(id:number):Observable<Proyectos>{

    return this.httpClient.get<Proyectos>(this.proyect_URL + `/traer/${id}`)
  }
  //guardar nuevo
  public save(proyecto: Proyectos):Observable<any>{
  
    return this.httpClient.post<any>(this.proyect_URL+`/crear`, proyecto);
  }
  //editar 
  public update(id:number, proyecto:Proyectos):Observable<any>{
   
    return this.httpClient.put<any>(this.proyect_URL+`/editar/${id}`, proyecto);
  }
  //borrar
  public delete(id:number):Observable<any>{
   
    return this.httpClient.delete<any>(this.proyect_URL+`/borrar/${id}`);
  }

}
