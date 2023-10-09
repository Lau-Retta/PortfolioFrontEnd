import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './educacion/educacion.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ExperienciasLaboralesComponent } from './trabajos/experiencias-laborales/experiencias-laborales.component';
import { RegistroComponent } from '../pages/registro/registro.component';
import { PaginaFueraDeServicioComponent } from './pagina-fuera-de-servicio/pagina-fuera-de-servicio.component';
import { NewEspecienciaComponent } from './trabajos/new-especiencia.component';


@NgModule({
  declarations: [
    
    
    

    PaginaFueraDeServicioComponent,
      NewEspecienciaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }