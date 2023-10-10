import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { empty } from 'rxjs';
import { Trabajos } from 'src/app/modelo/Trabajo.modelo';
import { Usuario } from 'src/app/modelo/Usuario.modelo';
import { TrabajosServiceService } from 'src/app/servicios/trabajos-service.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styleUrls: ['./panel-administrador.component.css']
})
export class PanelAdministradorComponent implements OnInit {
  usuario: Usuario = new Usuario("", "", "", "", "", "", "", "");
  token: String = "";
  usuarioEditado = this.formBuilder.group({
    nombre: [this.usuario.nombre],
    apellido: [this.usuario.apellido],
    image: [this.usuario.img],
    banner: [this.usuario.banner],
    descripcion: [this.usuario.descripcion],
    linkedin: [this.usuario.linkedin],
    instagram: [this.usuario.instagram],
    github: [this.usuario.github]
  })
  prebanner: any;
  prefoto:any;
  Error: String = "";

  //variables de experiencias
  trabajos:Trabajos []=[];
  n:number=-1;
  meses:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  trabajoEditar=this.formBuilder.group({
    empresa:[""],
    descripcion: [""],
    inicio: [""],
    fin: [""],
    img_empresa:[""],
    url_info:[""]
    
  })
  alertText: string = '';
  showAlert: boolean = false;
  

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private trabajoService: TrabajosServiceService) { }


  ngOnInit(): void {
    //apenas inicie accedo al token de autentificacion para accder a los endpoints
    this.token = window.sessionStorage.getItem("jtw") as String;

    //cargo los datos del usuario administrador:
    this.usuarioService.getUsuario().subscribe(data => {
      this.usuario = data,
      this.usuarioEditado = this.formBuilder.group({
        nombre: [this.usuario.nombre],
        apellido: [this.usuario.apellido],
        image: [this.usuario.img],
        banner: [this.usuario.banner],
        descripcion: [this.usuario.descripcion],
        linkedin: [this.usuario.linkedin],
        instagram: [this.usuario.instagram],
        github: [this.usuario.github]
      }),
      console.log(this.usuario);
      this.prefoto=data.img;
      this.prebanner=data.banner;

    //experiencias
    this.cargarExperiencia();
    })
   
  }

  //funciones para Perfil
  guardarPerfil() {
    this.usuarioService.UsuarioEdit(this.token, this.usuarioEditado.value as Usuario).subscribe(
      data => {
        console.log(data);

      },
      error => {
        alert("Error al modificar red social");
      }
    )
  }

  previsualizar(fotoSelect:String){
    if(fotoSelect="banner"){
      this.prebanner = this.usuarioEditado.controls.banner.value;
    }

    if(fotoSelect="perfil") {
      this.prefoto = this.usuarioEditado.controls.image.value;
    }
    console.log(this.prefoto);
    
  }
  

  // funciones para experiencias
  cargarExperiencia():void{
    this.trabajoService.getTrabajo().subscribe(
      data => {this.trabajos =data;}
    )
  }
 
  
  onTraerExperiencia(event: any):void{
    this.n = event.target.value -1; // Almacena el valor seleccionado en 'n'   
    this.trabajoEditar = this.formBuilder.group({
      empresa:[this.trabajos[this.n].empresa],
      descripcion:[this.trabajos[this.n].descripcion],
      inicio:[this.trabajos[this.n].inicio],
      fin:[this.trabajos[this.n].fin],
      img_empresa:[this.trabajos[this.n].img_empresa],
      url_info:[this.trabajos[this.n].url_info]
    }) 
    
  }
  onCrearExperiencia(){
    if(this.n=-1){
      this.trabajoService.save(this.trabajoEditar.value as Trabajos).subscribe(
        (response) => {
          // Maneja la respuesta exitosa aquí
          console.log('Respuesta exitosa:', response);

          this.alertText = 'Error en la solicitud: ' + response.message;

          // Muestra la alerta
          this.showAlert = true;
        },
        (error) => {
          // Maneja el error aquí
          console.error('Error en la solicitud:', error);
          // Configura el texto de la alerta
          this.alertText = 'Error en la solicitud: ' + error.message;

          // Muestra la alerta
          this.showAlert = true;
        }
      )
    }
  }

}
