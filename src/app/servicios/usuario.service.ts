import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL = 'http://localhost:8080/Personas/';
  

  constructor(private http: HttpClient) { }
  /*Observable lo utiliza Angualr para hacer las peticiones asincronas, el hhtp utiliza el observable para manejar las
  peticiones y respuestas atra vez de este*/
  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(this.URL+'traer/perfil');
 }
 

 public UsuarioEdit(token:String ,usuarioEditado: Usuario):Observable<any>{
  const headers = new HttpHeaders({
      
    'Authorization': 'Bearer '+token
  });

    return this.http.put<any>(this.URL+'editar/1', usuarioEditado,{headers});
 }

 cambioBanner(){
  
 }
}
