import { MaterialModule } from 'app/material/material.module';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SesionService } from '../sesion.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(
    private sesion: SesionService,
    private router: Router,
    private snackBar: MatSnackBar,) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (this.sesion.isLoggedIn()) {
      console.log("User Guard :"+ this.sesion.isLoggedIn());
      return true;
    }
    const msb = this.snackBar.open("No hay usuairo registrado. Debes iniciar sesión." ,"Login" );
    msb.onAction().subscribe(() => {
      this.router.navigate(['/auth/login']);
      console.log("User Guard :"+ this.sesion.isLoggedIn());
      return false;
    });

    // this.router.navigate(['/auth/login']);
    console.log("User Guard :"+ this.sesion.isLoggedIn());
    return false;
  }
}


