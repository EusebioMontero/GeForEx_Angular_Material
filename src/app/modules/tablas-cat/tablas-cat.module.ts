import { NgModule } from '@angular/core';
//modulo compartido
import { SharedModule } from 'app/shared/shared.module';
//todo lo relacionado con Material y formularios
import { MaterialModule } from '@material/material.module';
//routing
import { TablasCatRoutingModule } from '@tablas-cat/tablas-cat-routing.modules';
//componentes
import { MenuPrincipalComponent } from '@tablas-cat/menu-principal/menu-principal.component';
import { TablaRegistroEntradaComponent } from '@tablas-cat/tabla-registro-entrada/tabla-registro-entrada.component';
import { FormEditRegistroEntradaComponent } from '@tablas-cat/tabla-registro-entrada/components/form-edit-registro-entrada/form-edit-registro-entrada.component';
import { TablaActividadesComponent } from '@tablas-cat/tabla-actividades/tabla-actividades.component';
import { FormEditActividadesComponent } from '@tablas-cat/tabla-actividades/components/form-edit-actividades/form-edit-actividades.component';
import { TablaActividadesSubtiposComponent } from '@tablas-cat/tabla-actividades-subtipos/tabla-actividades-subtipos.component';
import { FormEditActividadesSubtiposComponent } from '@tablas-cat/tabla-actividades-subtipos/components/form-edit-actividades-subtipos/form-edit-actividades-subtipos.component';
import { TablaActividadesTiposComponent } from '@tablas-cat/tabla-actividades-tipos/tabla-actividades-tipos.component';
import { FormEditActividadesTiposComponent } from '@tablas-cat/tabla-actividades-tipos/components/form-edit-actividades-tipos/form-edit-actividades-tipos.component';
import { TablaEspeciesComponent } from '@tablas-cat/tabla-especies/tabla-especies.component';
import { FormEditEspeciesComponent } from '@tablas-cat/tabla-especies/components/form-edit-especies/form-edit-especies.component';
import { TablaExpedientesEstadosComponent } from '@tablas-cat/tabla-expedientes-estados/tabla-expedientes-estados.component';
import { FormEditExpedientesEstadosComponent } from '@tablas-cat/tabla-expedientes-estados/components/form-edit-expedientes-estados/form-edit-expedientes-estados.component';
import { TablaExpedientesTiposComponent } from '@tablas-cat/tabla-expedientes-tipos/tabla-expedientes-tipos.component';
import { FormEditExpedientesTiposComponent } from '@tablas-cat/tabla-expedientes-tipos/components/form-edit-expedientes-tipos/form-edit-expedientes-tipos.component';
import { TablaMunicipiosSigpacComponent } from '@tablas-cat/tabla-municipios-sigpac/tabla-municipios-sigpac.component';
import { FormEditMunicipiosSigpacComponent } from '@tablas-cat/tabla-municipios-sigpac/components/form-edit-municipios-sigpac/form-edit-municipios-sigpac.component';
import { TablaPoblacionesComponent } from './tabla-poblaciones/tabla-poblaciones.component';
import { FormEditPoblacionesComponent } from './tabla-poblaciones/components/form-edit-poblaciones/form-edit-poblaciones.component';
import { TablaProvinciasComponent } from './tabla-provincias/tabla-provincias.component';
import { FormEditProvinciasComponent } from './tabla-provincias/components/form-edit-provincias/form-edit-provincias.component';
import { FormEditServiciosTerritorialesComponent } from './tabla-servicios-territoriales/components/form-edit-servicios-territoriales/form-edit-servicios-territoriales.component';
import { TablaServiciosTerritorialesComponent } from './tabla-servicios-territoriales/tabla-servicios-territoriales.component';
import { FormEditTiposDocumentosComponent } from './tabla-tipos-documentos/components/form-edit-tipos-documentos/form-edit-tipos-documentos.component';
import { TablaTiposDocumentosComponent } from './tabla-tipos-documentos/tabla-tipos-documentos.component';
import { FormEditTiposDomiciliosComponent } from './tabla-tipos-domicilios/components/form-edit-tipos-domicilios/form-edit-tipos-domicilios.component';
import { TablaTiposDomiciliosComponent } from './tabla-tipos-domicilios/tabla-tipos-domicilios.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    TablaRegistroEntradaComponent,
    FormEditRegistroEntradaComponent,
    TablaActividadesComponent,
    FormEditActividadesComponent,
    TablaActividadesSubtiposComponent,
    FormEditActividadesSubtiposComponent,
    TablaActividadesTiposComponent,
    FormEditActividadesTiposComponent,
    TablaEspeciesComponent,
    FormEditEspeciesComponent,
    TablaExpedientesEstadosComponent,
    FormEditExpedientesEstadosComponent,
    TablaExpedientesTiposComponent,
    FormEditExpedientesTiposComponent,
    TablaMunicipiosSigpacComponent,
    FormEditMunicipiosSigpacComponent,
    TablaPoblacionesComponent,
    FormEditPoblacionesComponent,
    TablaProvinciasComponent,
    FormEditProvinciasComponent,
    TablaServiciosTerritorialesComponent,
    FormEditServiciosTerritorialesComponent,
    TablaTiposDocumentosComponent,
    FormEditTiposDocumentosComponent,
    TablaTiposDomiciliosComponent,
    FormEditTiposDomiciliosComponent

  ],
  imports: [
    SharedModule,
    MaterialModule,
    TablasCatRoutingModule
  ]
})
export class TablasCatModule { }
