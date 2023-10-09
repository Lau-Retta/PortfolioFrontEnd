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
}
