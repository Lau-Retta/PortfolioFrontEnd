import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../componentes/componentes.module';
import { PanelAdministradorComponent } from './panel-administrador/panel-administrador.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { EducacionComponent } from '../componentes/educacion/educacion.component';
import { HabilidadesComponent } from '../componentes/habilidades/habilidades.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { ExperienciasLaboralesComponent } from '../componentes/trabajos/experiencias-laborales/experiencias-laborales.component';
import { LoginComponent } from '../componentes/login/login.component';
import { PaginaFueraDeServicioComponent } from '../componentes/pagina-fuera-de-servicio/pagina-fuera-de-servicio.component';
import { ProyectosComponent } from '../componentes/proyectos/proyectos.component';





@NgModule({
  declarations: [
    PanelAdministradorComponent,
    RegistroComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   RegistroComponent,
   PanelAdministradorComponent
  ]
 
})
export class PagesModule { }