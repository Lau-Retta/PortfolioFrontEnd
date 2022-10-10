import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../componentes/componentes.module';
import { PanelAdministradorComponent } from './panel-administrador/panel-administrador.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';





@NgModule({
  declarations: [
    PanelAdministradorComponent,
    RegistroComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports:[
   RegistroComponent,
   PanelAdministradorComponent
  ]
 
})
export class PagesModule { }
