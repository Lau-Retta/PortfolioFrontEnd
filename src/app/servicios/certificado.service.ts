import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificado } from '../modelo/Certificados.modelo';
@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  Cer_RUL = 'http://localhost:8080/Certificado';

  constructor(private httpClient: HttpClient) { }

  public getCertificados():Observable<Certificado[]>{
    return this.httpClient.get<Certificado[]>(this.Cer_RUL+'/lista');
  }
}
