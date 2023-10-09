import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/modelo/request/loginRequest';
import { NewUser } from 'src/app/modelo/request/new-user';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
//formulario del registro

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  // atributos para logearse con el nuevo usuario.
  isLogged = false;
  loginUser!: LoginRequest;
  userName!: string;
  pass!: string;
  registerError: string = "";


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { 
    
  }

  //traen el username, email y pass del html
  get username() {

    return this.registerForm.controls.username;

  }
  get password() {
    return this.registerForm.controls.password;

  }

  get email() {
    return this.registerForm.controls.email;

  }



  ngOnInit(): void {

  }



  register(): void {

    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value as NewUser).subscribe({
        next: (token) => {
          //envia el tooken, usuario y rol al sessionStorage
          window.sessionStorage.setItem("jtw", token.token as string);
          window.sessionStorage.setItem("usuario", token.username as string);
          window.sessionStorage.setItem("Role", token.role as string);
        },
        error: (errorData) => {
          console.log(errorData);
          this.registerError = errorData;
        },
        complete: () => {
          console.log("Se ha creado el usario correctamente")
          this.router.navigateByUrl('/inicio');
         
          this.registerForm.reset
          
        }
      })

    } else {
      this.registerForm.markAllAsTouched();

    }
  }
  //funcion para logearse
  onLogin(): void {
    this.loginUser = new LoginRequest(this.userName, this.pass);
    this.authService.login(this.loginUser).subscribe(data => {
      this.isLogged = true;

    })
  }
}

