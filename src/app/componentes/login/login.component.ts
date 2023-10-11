import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/modelo/request/loginRequest';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  loginError: string = "";
  isLogged = false;//propiedad para verificar si esta logeado
  loginUser!: LoginRequest;
  Email!: string;
  pass!: string;



  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  //traer los valores de los input del form
  get email() {

    return this.loginForm.controls.email;

  }
  get password() {
    return this.loginForm.controls.password;

  }

  ngOnInit(): void {

  }
  //funcion para logearse
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (data) => {

          window.sessionStorage.setItem("jwt", data.token as string);
          window.sessionStorage.setItem("usuario", data.username as string);
          window.sessionStorage.setItem("Role", data.role as string);

          console.log("Se trae esta info:", data);

        },
        error: (errorData) => {
          console.log(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.log("Login completo")
          this.router.navigateByUrl('/inicio');

          this.loginForm.reset();
          this.loginForm.markAsPristine();
          this.loginForm.markAsUntouched();

        }
      });

    }
    else {
      alert("Error al ingresas los datos");
      this.loginForm.markAllAsTouched();
    }

  }



  //Fuincion para cambiar estado del login
  onLogin(): void {
    this.loginUser = new LoginRequest(this.Email, this.pass);
    this.authService.login(this.loginUser).subscribe(data => {
      this.isLogged = true;
      console.log(data);
    })
  }
}
