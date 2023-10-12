import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { empty } from 'rxjs';
import { Certificado } from 'src/app/modelo/Certificados.modelo';
import { Educacion } from 'src/app/modelo/Educacion.modelo';
import { Trabajos } from 'src/app/modelo/Trabajo.modelo';
import { Usuario } from 'src/app/modelo/Usuario.modelo';
import { CertificadoService } from 'src/app/servicios/certificado.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TrabajosServiceService } from 'src/app/servicios/trabajos-service.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styleUrls: ['./panel-administrador.component.css']
})
export class PanelAdministradorComponent implements OnInit {
  //variables genericas

  alertText: String = '';
  showAlert: boolean = false;
  //variables de usurio
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
  prefoto: any;
  Error: String = "";

  //variables de experiencias
  trabajos: Trabajos[] = [];
  indExp: number = -1;
  trabajoEditar = this.formBuilder.group({
    empresa: [""],
    descripcion: [""],
    inicio: [""],
    fin: [""],
    img_empresa: [""],
    url_info: [""]

  })
  elimExp: boolean = false;
  //variables de Educacion:
  estudios: Educacion[] = [];
  indEdu: number = -1;
  educacionEditar = this.formBuilder.group({
    instituto: [""],
    descripcion: [""],
    titulo: [""],
    fin: [""],
    img_educacion: [""],
    inicio: [""]

  })
  elimEstudio: boolean = false;


  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private trabajoService: TrabajosServiceService,
    private educacionService: EducacionService, private cursosService:CertificadoService) { }


  ngOnInit(): void {
    //apenas inicie accedo al token de autentificacion para accder a los endpoints
    this.token = window.sessionStorage.getItem("jwt") as String;

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

        this.prefoto = data.img;
      this.prebanner = data.banner;
    })
    //experiencias
    this.cargarExperiencia();
    //educacion
    this.cargarEducacion();
    //cursos
    
  }

  reseteoAlert(){
    this.showAlert = false;
    console.log(this.showAlert);
    
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

  previsualizar(fotoSelect: String) {
    if (fotoSelect = "banner") {
      this.prebanner = this.usuarioEditado.controls.banner.value;
    }

    if (fotoSelect = "perfil") {
      this.prefoto = this.usuarioEditado.controls.image.value;
    }
    console.log(this.prefoto);

  }

  // funciones para experiencias
  cargarExperiencia(): void {
    this.trabajoService.getTrabajo().subscribe(
      data => { this.trabajos = data; }
    )
  }

  onTraerExperiencia(event: any): void {
    this.indExp = event.target.value - 1; // Almacena el valor seleccionado en 'n'   
    if (this.indExp > -1) {
      this.trabajoService.detail(event.target.value).subscribe(data => {
        this.trabajoEditar = this.formBuilder.group({
          empresa: [data.empresa],
          descripcion: [data.descripcion],
          inicio: [data.inicio],
          fin: [data.fin],
          img_empresa: [data.img_empresa],
          url_info: [data.url_info]
        })
        this.elimExp = true;
      })

    }
    else {
      this.trabajoEditar.reset();
      this.elimExp = false;
    }


  }

  onCrearExperiencia() {
    console.log(this.trabajoEditar.value.empresa);
    console.log(this.indExp);

    if (this.indExp == -1) {
      this.trabajoService.save(this.trabajoEditar.value as Trabajos).subscribe(
        (response) => {
          // Maneja la respuesta exitosa aquí
          console.log('Respuesta exitosa:', response.message);

          this.alertText = response.mensaje as String;

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
    else {


      this.trabajoService.update(this.indExp + 1, this.trabajoEditar.value as Trabajos).subscribe(
        (response) => {
          // Maneja la respuesta exitosa aquí
          console.log('Respuesta exitosa:', response);

          this.alertText = response.mensaje as String;
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

  deleteExperiencia() {
    console.log(this.indExp + 1);

    this.trabajoService.delete(this.indExp + 1).subscribe(
      (response) => {
        // Maneja la respuesta exitosa aquí
        console.log('Respuesta exitosa:', response);

        this.alertText = response.mensaje as String;
        // Muestra la alerta
        this.showAlert = true;
        this.trabajoEditar.reset();
        this.elimExp = false;
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
  //funciones para Educacion
  cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.estudios = data;
    })
  }

  onTraerEstudios(event: any): void {
    this.indEdu = event.target.value - 1; // Almacena el valor seleccionado en 'n'   
    if (this.indEdu > -1) {
      this.educacionService.detail(event.target.value).subscribe(data => {
        this.educacionEditar = this.formBuilder.group({
          instituto: [data.instituto],
          descripcion: [data.descripcion],
          titulo: [data.titulo],
          fin: [data.fin],
          img_educacion: [data.img_educacion],
          inicio: [data.inicio]
        })
        this.elimEstudio = true;

      })


    }
    else {
      this.educacionEditar.reset();
      this.elimEstudio = false;
    }
  }
  CrearEstudio(): void {
    if (this.indEdu == -1) {
      this.educacionService.save(this.educacionEditar.value as Educacion).subscribe(
        (response) => {
          // Maneja la respuesta exitosa aquí
          console.log('Respuesta exitosa:', response.message);

          this.alertText = response.mensaje as String;

          // Muestra la alerta
          this.showAlert = true;
          this. cargarEducacion()
          
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
    else {


      this.educacionService.update(this.indEdu + 1, this.educacionEditar.value as Educacion).subscribe(
        (response) => {
          // Maneja la respuesta exitosa aquí
          console.log('Respuesta exitosa:', response);

          this.alertText = response.mensaje as String;
          // Muestra la alerta
          this.showAlert = true;
          this. cargarEducacion()
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
  eliminarEducacion(){
    this.educacionService.delete(this.indEdu+1).subscribe(
      (response) => {
        // Maneja la respuesta exitosa aquí
        console.log('Respuesta exitosa:', response);

        this.alertText = response.mensaje as String;
        // Muestra la alerta
        this.showAlert = true;
        this.trabajoEditar.reset();
        this.elimExp = false;
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


