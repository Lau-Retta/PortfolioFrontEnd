import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Certificado } from 'src/app/modelo/Certificados.modelo';
import { CertificadoService } from 'src/app/servicios/certificado.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TrabajosServiceService } from 'src/app/servicios/trabajos-service.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-panel-cursos',
  templateUrl: './panel-cursos.component.html',
  styleUrls: ['./panel-cursos.component.css']
})
export class PanelCursosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private cursosService:CertificadoService) { }

    certificados: Certificado[]=[];
    flag:number=0;
    CertificadoEditar = this.formBuilder.group({
      descripcion: [""], 
      certificado: [""]
    })
  

  ngOnInit(): void {
    this.cargarCursos();
  }

   //funciones para cursos
   cargarCursos():void{
    this.cursosService.getCertificados().subscribe(data =>{
      this.certificados=data;
    })
  }
  seleccionar(id:any){
    if(id==0){
      this.flag=0;
      this.CertificadoEditar.reset();
    }
    else{
    this.flag= id;
    this.CertificadoEditar = this.formBuilder.group({
      descripcion: [this.certificados[id-1].descripcion], 
      certificado: [this.certificados[id-1].certificado]
    })}    
    
  }

  guardar(){
    if(this.flag==0){
      this.cursosService.save(this.CertificadoEditar.value as Certificado).subscribe(
        (resp)=>{

          console.log(resp);
          this.cargarCursos();
        },
        (err)=>{

          console.log(err);
          
        }
      )
    }
    else{
      this.cursosService.update(this.flag, this.CertificadoEditar.value as Certificado).subscribe(
        (resp)=>{

          console.log(resp);
          this.cargarCursos();
        },
        (err)=>{

          console.log(err);
          
        }
      )
      this.flag=0;
    }
    
  }
  eliminar(){
    this.cursosService.delete(this.flag).subscribe(
      (resp)=>{

        console.log(resp);
        this.cargarCursos();
      },
      (err)=>{

        console.log(err);
        
      }
    )
  }
}
