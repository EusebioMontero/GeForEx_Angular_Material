import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private tokenService: TokenService
  ) {

  }

  ngOnInit() {
    // console.log(this.tokenService.getToken());

    if (this.tokenService.getToken()) {
      const msb = this.snackBar.open("Has cerrado sesión! ", "OK",{duration: 3000});
      msb.onAction().subscribe(() => {
        this.router.navigate(['/']);//redirecciona al login.html
        msb.dismiss(); //cierra el snackbar. No se puede hacer en el html.
        return; //para que no se siga ejecutando el codigo de abajo.
      });
      this.router.navigate(['/']);
      window.sessionStorage.clear();
    }else{
      const msb = this.snackBar.open("No hay usuario iniciado", "Login",  {duration: 5000});
      msb.onAction().subscribe(() => {
        this.router.navigate(['/login']);//redirecciona al login.html
        msb.dismiss(); //cierra el snackbar. No se puede hacer en el html.
        return; //para que no se siga ejecutando el codigo de abajo.

      });
      this.router.navigate(['/']);
    }
  }

}


