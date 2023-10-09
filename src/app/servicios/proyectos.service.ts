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
}
