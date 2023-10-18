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

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelCursosComponent } from './pages/panel-administrador/panel-cursos/panel-cursos.component';
import { PagesModule } from './pages/pages.module';
import { PanelHabilidadesComponent } from './pages/panel-administrador/panel-habilidades/panel-habilidades.component';
import { AuthInterseptorService } from './servicios/interseptor/auth-interseptor.service';
import { PanelProyectosComponent } from './pages/panel-administrador/panel-proyectos/panel-proyectos/panel-proyectos.component';





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
    PanelHabilidadesComponent,
    PanelProyectosComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterseptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }