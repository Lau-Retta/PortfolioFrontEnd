import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtDto } from 'src/app/modelo/JwtDto';
import { Usuario } from 'src/app/modelo/Usuario.modelo';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  userLoginOn: boolean = false;
  UserData?: JwtDto;
  usuario: Usuario = new Usuario("","","","","","","","");
  banner:String="";

  constructor(public usuarioService: UsuarioService, private authService:AuthService, private router:Router) { 
  }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => {this.usuario = data,
      this.banner= data.banner})

    this.authService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    })

    this.authService.userData.subscribe(
      Data => {
       this.UserData = Data;
        
      }
     )
   
  }
   

  UserAdmin(){
    
    
    if(this.UserData?.role=="Admin"){
      this.router.navigateByUrl('/panel');
    }
    else{
      alert("Usted no es us usuario administrador")
    }
  }


  }


