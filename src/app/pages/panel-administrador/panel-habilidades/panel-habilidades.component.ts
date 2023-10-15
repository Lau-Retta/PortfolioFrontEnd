import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Habilidad } from 'src/app/modelo/HardSkills.modelo';
import { Habilidades } from 'src/app/modelo/SoftSkills.modelo';
import { HardSkillsService } from 'src/app/servicios/hard-skills.service';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';

@Component({
  selector: 'app-panel-habilidades',
  templateUrl: './panel-habilidades.component.html',
  styleUrls: ['./panel-habilidades.component.css']
})
export class PanelHabilidadesComponent implements OnInit {
  indicador: number = 0;

  tenoNueva: boolean = true;
  hablidadNueva: boolean = true;
  tecnologias: Habilidad[] = [];
  habilidades: Habilidades[] = [];
  tecnoEditar = this.formBuilder.group({
    habilidad: [''],
    nivel: [0]
  })

  habilidadEditar = this.formBuilder.group({
    habilidad: [""]
  })

  constructor(private hardService: HardSkillsService, private formBuilder: FormBuilder, private softService: SoftSkillsService) { }



  ngOnInit(): void {
    this.cargarTecnologias();

    this.cargarHabilidad();
  }

  selector(id: any) {
    this.indicador = id;
    console.log("id"+id);
    console.log("iundicador:"+this.indicador);
    
    
  }
  resetForm() {
    this.tecnoEditar.reset()
  }
  Guardar(skill: number) {
    if (skill == 1) {
      if (this.tenoNueva) {
        this.hardService.save(this.tecnoEditar.value as Habilidad).subscribe(
          (response) => {
            this.cargarTecnologias()
            console.log(response);
          },
          (error) => {
            console.log(error);
          })
        
      }
      else {
        this.hardService.update(this.indicador, this.tecnoEditar.value as Habilidad).subscribe(
          (response) => {
            this.cargarTecnologias()
            console.log(response);
          },
          (error) => {
            console.log(error);
          })

      }
    }

    if (skill == 0) {

      if (this.hablidadNueva) {
        this.softService.save(this.habilidadEditar.value as Habilidades).subscribe(
          (response) => {
            this.cargarHabilidad()
            console.log(response);
          },
          (error) => {
            console.log(error);
          })
      }
      else {
        this.softService.update(this.indicador, this.habilidadEditar.value as Habilidades).subscribe(
          (response) => {
            this.cargarHabilidad()
            console.log(response);
          },
          (error) => {
            console.log(error);
          })

      }
    }
    
  }
  cargarHabilidad() {
    this.softService.getHabilidades().subscribe(data => {
      this.habilidades = data;
    });
  }
  cargarTecnologias() {
    this.hardService.getHabilidades().subscribe(data => {
      this.tecnologias = data;
    });
  }
  


  //funcion para cargar formulario para editar HardSkills
  EditarTecno(id: any) {
    this.tecnoEditar.reset();

    this.hardService.detail(id as number).subscribe(data => {
      this.tecnoEditar = this.formBuilder.group({
        habilidad: [data.habilidad],
        nivel: [data.nivel]
      })
    })
    this.tenoNueva = false;
    this.indicador = id;
    console.log(id);

  }
  
  EliminarTecno() {
    this.hardService.delete(this.indicador).subscribe(
      (resp) => {
        this.cargarTecnologias()
        console.log(resp);
      },
      (err) => {
        console.log(err);

      }
    )
    
  }

  //funcion para cargar formulario para editar softSkills
  EditarHabilidad(id:any){
    this.habilidadEditar.reset();

    this.softService.detail(id).subscribe(data =>{
      this.habilidadEditar = this.formBuilder.group({
        habilidad:[data.habilidad]
      })
    })
  }

  EliminiarHablidad(){
    this.softService.delete(this.indicador).subscribe(
      (resp) => {
        this.cargarHabilidad()
        console.log(resp);
      },
      (err) => {
        console.log(err);

      }
    )
    
  }
}
