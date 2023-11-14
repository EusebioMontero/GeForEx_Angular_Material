import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { MenuItemTablas } from '@shared/constantes/menu-items-tablas'


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  // styleUrls: ['../styles/styles-tablas.scss'],
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  menuNav: any;

  constructor(private router: Router,) {

  }

  ngOnInit(): void {
    this.menuNav = MenuItemTablas.allItems()
  }

  goToEspecies() {

    this.router.navigate(['/rutaTablaEspecies']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaMunicipiosSigpac() {

    this.router.navigate(['/rutaTablaMunicipiosSigpac']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToServiciosTerritoriales() {

    this.router.navigate(['/rutaTablaServiciosTerritoriales']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaExpedientesTipos() {

    this.router.navigate(['/rutaTablaExpedientesTipos']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaExpedientesExpedientesEstados() {

    this.router.navigate(['/rutaTablaExpedientesEstados']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }
  goToTablaTiposDocumentos() {

    this.router.navigate(['/rutaTablaTiposDocumentos']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaTiposDomicilios() {

    this.router.navigate(['/rutaTablaTiposDomicilios']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaActividadesTipos() {

    this.router.navigate(['/rutaTablaActividadesTipos']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaActividadesSubtipos() {

    this.router.navigate(['/rutaTablaActividadesSubtipos']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaActividades() {

    this.router.navigate(['/rutaTablaActividades']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaRegistroEntrada() {

    this.router.navigate(['/tablas-cat/registro-entrada']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaProvincias() {

    this.router.navigate(['/rutaTablaProvincias']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

  goToTablaPoblaciones() {

    this.router.navigate(['/rutaTablaPoblaciones']).then(e => {
      if (e) {
        console.log("good work")
      } else {
        console.log("bad work")
      }
    });
  }

}
