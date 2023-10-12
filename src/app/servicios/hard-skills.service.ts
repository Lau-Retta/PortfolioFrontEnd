import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Habilidad} from '../modelo/HardSkills.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {
  hard_URL= 'http://localhost:8080/Hard';

  constructor(private httpClient : HttpClient) { }

  public getHabilidades():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.hard_URL+'/lista');

  }


  //obtenemos educacion x id
  public detail(id:number):Observable<Habilidad>{

    return this.httpClient.get<Habilidad>(this.hard_URL + `/traer/${id}`)
  }
  //guardar una nueva educacion
  public save(hablidad: Habilidad):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.post<any>(this.hard_URL+`/crear`, hablidad, { headers });
  }
  //editar una educacion
  public update(id:number, hablidad:Habilidad):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.put<any>(this.hard_URL+`/editar/${id}`, hablidad, {headers});
  }
  //borrar una educacion
  public delete(id:number):Observable<any>{
    const headers = new HttpHeaders({
      
      'Authorization': 'Bearer '+ window.sessionStorage.getItem("jwt")
    });
    return this.httpClient.delete<any>(this.hard_URL+`/borrar/${id}`,{headers});
  }
}
