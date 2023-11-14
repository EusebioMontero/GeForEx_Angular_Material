import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { SesionService } from 'app/shared/services/sesion.service';
import { LoginUsuario } from '../models/login-usuario';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable(

)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormControl = new FormControl('', [Validators.required, Validators.email]);
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private sesionService: SesionService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {

    if (this.tokenService.getToken()) {//si hay un token almacenado
      const msb = this.snackBar.open("Ya has iniciado sesión como " + this.sesionService.getUserName(), "OK", { duration: 3000 });
    }
  }
  onLogin(userlogin: HTMLInputElement): void {
    this.loginUsuario = new LoginUsuario(userlogin.value, "tragsa");//usuario / key  en la base de datos
    this.authService.login(this.loginUsuario)//construye la peticion con el usuario. Si el login es correcto devuelve el token (model JwtDto)
      .subscribe(//se suscribe a la respuesta
        data => {
          this.tokenService.setToken(data.token);
          this.sesionService.setUserName(data.login);
          this.sesionService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['/']);
        },
        (err: HttpErrorResponse) => {
          console.log("Error: " + err.status);
          if (err.status >= 401) {
            {
              const msb = this.snackBar.open("No existe el usuario " + userlogin.value + " !!", "OK");
            }
            this.isLogged = false;
          }
        });
  }
}
