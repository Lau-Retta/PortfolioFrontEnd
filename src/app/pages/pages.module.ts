import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../componentes/componentes.module';
import { PanelAdministradorComponent } from './panel-administrador/panel-administrador.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { PanelCursosComponent } from './panel-administrador/panel-cursos/panel-cursos.component';
import { PanelHabilidadesComponent } from './panel-administrador/panel-habilidades/panel-habilidades.component';





@NgModule({
  declarations: [
   
  
    
  
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[
   
  
  ]
 
})
export class PagesModule { }