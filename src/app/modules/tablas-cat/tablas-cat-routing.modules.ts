import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardService as guard } from '@shared/services/guards/user-guard.service';

import { BaseComponent } from '@layout/base/base.component';
import { MenuPrincipalComponent } from '@tablas-cat/menu-principal/menu-principal.component';
import { TablaRegistroEntradaComponent } from '@tablas-cat/tabla-registro-entrada/tabla-registro-entrada.component';
import { TablaActividadesComponent } from '@tablas-cat/tabla-actividades/tabla-actividades.component';
import { TablaActividadesSubtiposComponent } from '@tablas-cat/tabla-actividades-subtipos/tabla-actividades-subtipos.component';
import { TablaActividadesTiposComponent } from '@tablas-cat/tabla-actividades-tipos/tabla-actividades-tipos.component';
import { TablaEspeciesComponent } from '@tablas-cat/tabla-especies/tabla-especies.component';
import { TablaExpedientesEstadosComponent } from '@tablas-cat/tabla-expedientes-estados/tabla-expedientes-estados.component';
import { TablaExpedientesTiposComponent } from './tabla-expedientes-tipos/tabla-expedientes-tipos.component';
import { TablaMunicipiosSigpacComponent } from './tabla-municipios-sigpac/tabla-municipios-sigpac.component';
import { TablaPoblacionesComponent } from './tabla-poblaciones/tabla-poblaciones.component';
import { TablaProvinciasComponent } from './tabla-provincias/tabla-provincias.component';
import { TablaServiciosTerritorialesComponent } from './tabla-servicios-territoriales/tabla-servicios-territoriales.component';
import { TablaTiposDocumentosComponent } from './tabla-tipos-documentos/tabla-tipos-documentos.component';
import { TablaTiposDomiciliosComponent } from './tabla-tipos-domicilios/tabla-tipos-domicilios.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'menu', component: MenuPrincipalComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'registro-entrada', component: TablaRegistroEntradaComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'actividades', component: TablaActividadesComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'actividades-subtipos', component: TablaActividadesSubtiposComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'actividades-tipos', component: TablaActividadesTiposComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'especies', component: TablaEspeciesComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'expedientes-estado', component: TablaExpedientesEstadosComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'expedientes-tipo', component: TablaExpedientesTiposComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'municipios-sigpac', component: TablaMunicipiosSigpacComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'poblaciones', component: TablaPoblacionesComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'provincias', component: TablaProvinciasComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'servicios-territoriales', component: TablaServiciosTerritorialesComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'documentos-tipo', component: TablaTiposDocumentosComponent,
      canActivate: [guard]
    }]
  },
  {
    path: '', component: BaseComponent,
    children: [{
      path: 'domicilios-tipo', component: TablaTiposDomiciliosComponent,
      canActivate: [guard]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasCatRoutingModule { }
