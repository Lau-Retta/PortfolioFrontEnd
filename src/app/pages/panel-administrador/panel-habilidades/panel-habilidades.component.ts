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
  indicador:number=0;
  tenoNueva:boolean=true;
  tecnologias: Habilidad[]=[];
  habilidades:Habilidades[]=[];
  tecnoEditar = this.formBuilder.group({
    habilidad:[''],
    nivel:[0]
  })

  habilidadEditar= this.formBuilder.group({
    hablidadBlanda:[]
  })

  constructor(private hardService:HardSkillsService, private formBuilder:FormBuilder, private softService: SoftSkillsService) { }



  ngOnInit(): void {
    this.cargarTecnologias();

    this.cargarHabilidad();
  }

  cargarTecnologias(){
   this.hardService.getHabilidades().subscribe(data => {
    this.tecnologias = data;
   });
  }
  resetForm(){
    this.tecnoEditar.reset()
  }
  GuardarTecno(){
    if(this.tenoNueva){
      this.hardService.save(this.tecnoEditar.value as Habilidad).subscribe(
        (response)=>{ console.log(response);
        },
        (error)=>{console.log(error);
        })
    }
    else{
      this.hardService.update(this.indicador,this.tecnoEditar.value as  Habilidad).subscribe(
        (response)=>{ console.log(response);
        },
        (error)=>{console.log(error);
        })
      
    }
  }
  //funcion para cargar formulario para editar hardSkill
  EditarTecno(id:any){
    this.tecnoEditar = this.formBuilder.group({
      habilidad:[""],
      nivel:[0]
    })

    this.hardService.detail(id as number).subscribe(data=>{
      this.tecnoEditar = this.formBuilder.group({
        habilidad:[data.habilidad],
        nivel:[data.nivel]
      })
    })
    this.tenoNueva = false;
    this.indicador = id;
    console.log(id);
    
  }
  selector(id:any){
    this.indicador=id;
  }
  EliminarTecno(){
    this.hardService.delete( this.indicador).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
        
      }
    )
  } 


  cargarHabilidad(){
    this.softService.getHabilidades().subscribe(data => {
     this.habilidades = data;
    });
   }

}
