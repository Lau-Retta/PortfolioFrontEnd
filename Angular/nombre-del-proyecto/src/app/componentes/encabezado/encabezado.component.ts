import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario.modelo';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {


    usuario: Usuario = new Usuario("","","","","","","","");

  constructor(public usuarioService: UsuarioService) { 
  }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => {this.usuario = data})
  }
   
  }


