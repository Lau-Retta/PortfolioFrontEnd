import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Proyectos } from 'src/app/modelo/Proyecto.modelo';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-panel-proyectos',
  templateUrl: './panel-proyectos.component.html',
  styleUrls: ['./panel-proyectos.component.css']
})
export class PanelProyectosComponent implements OnInit {
  flag: number = 0;
  enableDelete: boolean = false;
  proyectos: Proyectos[] = [];
  prefoto: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LI5pwKuyOnzE_R7AIrgAyZD52CufiuFy-Z9wFXY&s";
  proyectosEditar = this.formBuilder.group({
    nombre: [""],
    descripcion: [""],
    ima_proyecto: [""],
    url: [""]
  })

  constructor(private proyectsService: ProyectosService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.cargarProyectos()
  }

  cargarProyectos() {
    this.proyectsService.getProyectos().subscribe(data => {
      this.proyectos = data;
    })
  }
  seleccionar(event: any): void { 
    this.flag = event.target.value - 1;
    
    if (this.flag > -1) {
      this.proyectsService.detail(event.target.value).subscribe(
        data => {
          this.proyectosEditar = this.formBuilder.group({
            nombre: [data.nombre],
            descripcion: [data.descripcion],
            ima_proyecto: [data.ima_proyecto],
            url: [data.url]
          })
          this.prefoto = data.ima_proyecto;
          
        }
      )

      this.enableDelete = true;
    }
    else {
      this.proyectosEditar.reset();
      this.enableDelete = false;
      this.prefoto= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LI5pwKuyOnzE_R7AIrgAyZD52CufiuFy-Z9wFXY&s";
    }

  }

  guardar(){
    if(this.flag==0){
      this.proyectsService.save(this.proyectosEditar
        .value as Proyectos).subscribe(
        (resp)=>{

          console.log(resp);
          this.cargarProyectos();
          this.proyectosEditar.reset()
        },
        (err)=>{

          console.log(err);
          
        }
      )
      this.flag=0;
    }
    else{
      this.proyectsService.update(this.flag+1, this.proyectosEditar.value as Proyectos).subscribe(
        (resp)=>{

          console.log(resp);
          this.cargarProyectos();
          this.proyectosEditar.reset()
        },
        (err)=>{

          console.log(err);
          
        }
      )
      this.flag=0;
    }
  }

  eliminar(){
    this.proyectsService.delete(this.flag+1).subscribe(
      (resp)=>{

        console.log(resp);
        this.cargarProyectos();
        this.proyectosEditar.reset()
      },
      (err)=>{

        console.log(err);
        
      }
    )
  }
}
