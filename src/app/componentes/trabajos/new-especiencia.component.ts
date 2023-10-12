import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajos } from 'src/app/modelo/Trabajo.modelo';
import { TrabajosServiceService } from 'src/app/servicios/trabajos-service.service';

@Component({
  selector: 'app-new-especiencia',
  templateUrl: './new-especiencia.component.html',
  styleUrls: ['./new-especiencia.component.css']
})
export class NewEspecienciaComponent implements OnInit {
  empresa: string = "";
  descripcion: string = "";
  inicio: string = "";
  fin: string = "";
  img_empresa : string= "";
  url_info : string= "";

  constructor(private trabajosService: TrabajosServiceService, private router: Router) { }

  ngOnInit(): void {

  }
  onCreate():void{
    const exp = new Trabajos(this.empresa, this.descripcion ,this.inicio,this.fin,this.img_empresa, this.url_info);

    this.trabajosService.save(exp).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate([''])
    }, err => {
      alert("Fallo"),
      this.router.navigate([''])
    })
  }

}
