import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidad } from '../modelo/HardSkills.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {
  hard_URL = 'http://localhost:8080/Hard';

  constructor(private httpClient: HttpClient) { }

  public getHabilidades(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.hard_URL + '/lista');

  }

  //obtenemos habilidad  x id
  public detail(id: number): Observable<Habilidad> {

    return this.httpClient.get<Habilidad>(this.hard_URL + `/traer/${id}`)
  }
  //guardar una nueva habilidad
  public save(hablidad: Habilidad): Observable<any> {

    return this.httpClient.post<any>(this.hard_URL + `/crear`, hablidad);
  }
  //editar una habilidad
  public update(id: number, hablidad: Habilidad): Observable<any> {

    return this.httpClient.put<any>(this.hard_URL + `/editar/${id}`, hablidad);
  }
  //borrar una habilidad
  public delete(id: number): Observable<any> {

    return this.httpClient.delete<any>(this.hard_URL + `/borrar/${id}`);
  }
}
