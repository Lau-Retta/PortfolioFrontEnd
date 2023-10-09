import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/modelo/Educacion.modelo';
import { Certificado } from 'src/app/modelo/Certificados.modelo';
import { CertificadoService } from 'src/app/servicios/certificado.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[]=[];
  certi: Certificado[]=[];
  constructor(private educacionService: EducacionService, private certificadService: CertificadoService) { }

  ngOnInit(): void {
    this.CargaEducacion();
    this.CargaCertificados();
  }

  CargaEducacion():void{
    this.educacionService.getEducacion().subscribe(
      data => {this.edu =data;}
    )
  }
  CargaCertificados():void{
    this.certificadService.getCertificados().subscribe(
      data => {this.certi =data;}
    )
  }
  
}
