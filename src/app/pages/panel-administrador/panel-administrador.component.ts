import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/modelo/Usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styleUrls: ['./panel-administrador.component.css']
})
export class PanelAdministradorComponent implements OnInit {
  usuario: Usuario = new Usuario("","","","","","","","");
  token:String="";
  usuarioEditado = this.formBuilder.group({
    nombre:[this.usuario.nombre],
    apellido:[this.usuario.apellido],
    image:[this.usuario.img],
    banner:[this.usuario.banner],
    descripcion:[this.usuario.descripcion],
    linkedin:[this.usuario.linkedin],
    instagram:[this.usuario.instagram],
    github:[this.usuario.github]})
  baner:String="";
Error:String="";

  constructor(private usuarioService: UsuarioService, private formBuilder:FormBuilder) { }
  

  ngOnInit(): void {
    //apenas inicie accedo al token de autentificacion para accder a los endpoints
    this.token= window.sessionStorage.getItem("jtw") as String;

    //cargo los datos del usuario administrador:
    this.usuarioService.getUsuario().subscribe(data => {this.usuario = data
   ,

    this.usuarioEditado = this.formBuilder.group({
      nombre:[this.usuario.nombre],
      apellido:[this.usuario.apellido],
      image:[this.usuario.img],
      banner:[this.usuario.banner],
      descripcion:[this.usuario.descripcion],
      linkedin:[this.usuario.linkedin],
      instagram:[this.usuario.instagram],
      github:[this.usuario.github]
  }),
  console.log(this.usuario);
  
    })
   
    
  }
  guardarRedes(){
    this.usuarioService.UsuarioEdit(this.token, this.usuarioEditado.value as Usuario).subscribe(
      data =>{
        console.log(data);
        
      },
      error =>{
        alert("Error al modificar red social");
      }
    )
  }

  cambiarBanner(){

  }
}
