import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidades } from '../modelo/SoftSkills.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {
  soft_URL= 'http://localhost:8080/Soft';
  constructor(private httpClient : HttpClient) { }
  public getHabilidades():Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.soft_URL+'/lista');
  }


   //obtenemos educacion x id
   public detail(id: number): Observable<Habilidades> {

    return this.httpClient.get<Habilidades>(this.soft_URL + `/traer/${id}`)
  }
  //guardar una nueva educacion
  public save(hablidad: Habilidades): Observable<any> {

    return this.httpClient.post<any>(this.soft_URL + `/crear`, hablidad);
  }
  //editar una educacion
  public update(id: number, hablidad: Habilidades): Observable<any> {

    return this.httpClient.put<any>(this.soft_URL + `/editar/${id}`, hablidad);
  }
  //borrar una educacion
  public delete(id: number): Observable<any> {

    return this.httpClient.delete<any>(this.soft_URL + `/borrar/${id}`);
  }
}
