import { Component, OnInit } from '@angular/core';
import { Trabajos } from 'src/app/modelo/Trabajo.modelo';
import { TrabajosServiceService } from 'src/app/servicios/trabajos-service.service';


@Component({
  selector: 'app-experiencias-laborales',
  templateUrl: './experiencias-laborales.component.html',
  styleUrls: ['./experiencias-laborales.component.css']
})
export class ExperienciasLaboralesComponent implements OnInit {
  trabajo: Trabajos = new Trabajos("","",0,0,"");

  constructor(public trabajoService: TrabajosServiceService) { 
  }

  ngOnInit(): void {
    this.trabajoService.getTrabajo().subscribe(data => {this.trabajo = data})
  }

}
