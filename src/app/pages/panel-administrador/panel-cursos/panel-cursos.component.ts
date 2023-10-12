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

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private trabajoService: TrabajosServiceService,
    private educacionService: EducacionService, private cursosService:CertificadoService) { }

    certificados: Certificado[]=[];
    indCerti:number=-1;
    CertificadoEditar = this.formBuilder.group({
      descripcion: [""], 
      certificado: [""]
    })
    NuevoCertificado = this.formBuilder.group({
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
}
