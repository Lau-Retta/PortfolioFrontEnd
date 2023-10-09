import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/modelo/HardSkills.modelo';
import { Habilidades } from 'src/app/modelo/SoftSkills.modelo';
import { HardSkillsService } from 'src/app/servicios/hard-skills.service';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  hardskill :Habilidad[]=[];
  softskills :Habilidades[]=[];
  coloresDeFondo: string[] = ['bg-secondary', 'bg-primary', 'bg-danger'];

  constructor(private hardskillService: HardSkillsService, private softskillsService : SoftSkillsService) { }

  ngOnInit(): void {
    this.cargarHardSkill();
    this.cargarSoftSkill();
  }
  cargarHardSkill():void{
    this.hardskillService.getHabilidades().subscribe(
      data => {this.hardskill =data;}
    )
  }
  cargarSoftSkill():void{
    this.softskillsService.getHabilidades().subscribe(
      data => {this.softskills =data;}
    )
  }
}
