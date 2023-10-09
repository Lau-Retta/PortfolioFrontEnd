import { HttpClient } from '@angular/common/http';
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
}
