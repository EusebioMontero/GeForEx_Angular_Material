import { AuthModule } from './../../../auth/auth.module';
import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../auth/services/token.service';
import { SesionService } from 'app/shared/services/sesion.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private sesionService: SesionService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      const msb = this.snackBar.open("Bienvenido " + this.sesionService.getUserName() + " !!! Tienes acceso como "+
      this.sesionService.getAuthorities(), "OK", {duration: 3000});
    } //else{
      // const msb = this.snackBar.open("Inicia sesión." , "Login");
      // msb.onAction().subscribe(() => {
      //   this.router.navigate(['/auth/login']);//redirecciona al login.html
      //   msb.dismiss(); //cierra el snackbar. No se puede hacer en el html.
      //   console.log("Cerrar snackbar");//para verificar que se cierra el snackbar.
      //   return; //para que no se siga ejecutando el codigo de abajo.


    //}
    // );
  // }
  }
}
