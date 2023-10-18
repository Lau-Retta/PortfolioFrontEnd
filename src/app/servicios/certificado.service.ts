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

   //obtenemos  certificado x id
   public detail(id:number):Observable<Certificado>{

    return this.httpClient.get<Certificado>(this.Cer_RUL + `/traer/${id}`)
  }
  //guardar nuevo
  public save(certificado: Certificado):Observable<any>{
  
    return this.httpClient.post<any>(this.Cer_RUL+`/crear`, certificado);
  }
  //editar 
  public update(id:number, certificado:Certificado):Observable<any>{
   
    return this.httpClient.put<any>(this.Cer_RUL+`/editar/${id}`, certificado);
  }
  //borrar
  public delete(id:number):Observable<any>{
   
    return this.httpClient.delete<any>(this.Cer_RUL+`/borrar/${id}`);
  }

}
