import { HttpClient } from '@angular/common/http';
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
}
