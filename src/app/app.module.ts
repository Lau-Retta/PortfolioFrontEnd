import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciasLaboralesComponent } from './componentes/trabajos/experiencias-laborales/experiencias-laborales.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PanelAdministradorComponent } from './pages/panel-administrador/panel-administrador.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelCursosComponent } from './pages/panel-administrador/panel-cursos/panel-cursos.component';
import { PagesModule } from './pages/pages.module';
import { PanelHabilidadesComponent } from './pages/panel-administrador/panel-habilidades/panel-habilidades.component';





@NgModule({
  declarations: [
    
    AppComponent,
    EncabezadoComponent,
    ExperienciasLaboralesComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    PanelAdministradorComponent,
    PanelCursosComponent,
    PanelHabilidadesComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }