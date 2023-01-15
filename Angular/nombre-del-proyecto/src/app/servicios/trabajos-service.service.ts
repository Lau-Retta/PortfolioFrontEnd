import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajos } from '../modelo/Trabajo.modelo';

@Injectable({
  providedIn: 'root'
})
export class TrabajosServiceService {
  URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  public getTrabajo():Observable<Trabajos>{
    return this.http.get<Trabajos>(this.URL+'inicio/trabajos');
  }
}
