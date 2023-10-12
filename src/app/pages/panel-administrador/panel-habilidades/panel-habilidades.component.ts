import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Habilidad } from 'src/app/modelo/HardSkills.modelo';
import { HardSkillsService } from 'src/app/servicios/hard-skills.service';

@Component({
  selector: 'app-panel-habilidades',
  templateUrl: './panel-habilidades.component.html',
  styleUrls: ['./panel-habilidades.component.css']
})
export class PanelHabilidadesComponent implements OnInit {
  indicador:number=-1;
  tecnologias: Habilidad[]=[]
  tecnoEditar = this.formBuilder.group({
    habilidad:[''],
    nivel:[0]
  })

  constructor(private hardService:HardSkillsService, private formBuilder:FormBuilder) { }



  ngOnInit(): void {
    this.cargarTecnologias();
  }

  cargarTecnologias(){
   this.hardService.getHabilidades().subscribe(data => {
    this.tecnologias = data;
   });
  }

}
