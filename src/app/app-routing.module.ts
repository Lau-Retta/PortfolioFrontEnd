import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PanelAdministradorComponent } from './pages/panel-administrador/panel-administrador.component';
import { PaginaFueraDeServicioComponent } from './componentes/pagina-fuera-de-servicio/pagina-fuera-de-servicio.component';



const routes: Routes = [
  { path:'', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'registro', component:RegistroComponent},
  { path: 'panel', component:PanelAdministradorComponent},
  
  //Componente para las rutas no encontradas//
  { path: '**', pathMatch:'full', component:PaginaFueraDeServicioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }