import { Component, OnInit, Inject } from '@angular/core';
import { SesionService } from 'app/shared/services/sesion.service';
import { DOCUMENT } from '@angular/common';
import { MenuItemTablas } from '@shared/constantes/menu-items-tablas';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  itemTablas: any;

  isHome!: boolean;

  isLogedIn = true;
  userLoged: any = { nombre: "", rol: "", avatar: "" };

  // fillerNav = [
  //   { text: "HOME", route: "/", icon: "home" },
  //   { text: "Gestion de usuarios", route: "/users/crud-users", icon: "people" },
  //   { text: "Tablas Catálogo", route: "/tablas-cat/menu", icon: "table_chart" },
  // ];

  constructor(
    private sesionService: SesionService,
    @Inject(DOCUMENT) document: any
  ) { }

  ngOnInit(): void {
    this.itemTablas = MenuItemTablas.allItems()
    // console.log(document.location.href);

    if (document.location.href.endsWith("front/")) {
      this.isHome = true;
    }
    this.isLogedIn = this.sesionService.isLoggedIn();

    if (this.isLogedIn) {
      this.userLoged.nombre = this.sesionService.getUserName();
      this.userLoged.rol = this.sesionService.getAuthorities();
    }
    // console.log(this.isLogedIn);
  }
}
