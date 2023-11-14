import { TiposDoumentos } from './../entity/tipos-documentos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especies } from '@tablas-cat/entity/especies';
import { MunicipiosSigpac } from '../entity/municipios-sigpac';
import { ServiciosTerritoriales } from '../entity/serviciosTerritoriales';
import { ExpedientesTipos } from '../entity/expedientes-tipos';
import { ExpedientesEstados } from '../entity/expedientes-estados';
import { TiposDomicilios } from '../entity/tipos-domicilios';
import { Actividades } from '../entity/actividades';
import { ActividadesTipos } from '../entity/actividades-tipos';
import { ActividadesSubtipos } from '../entity/actividades-subtipos';
import { RegistroEntrada } from '../entity/registro-entrada';
import { Provincias } from '../entity/provincias';
import { Poblaciones } from '../entity/poblaciones';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from 'app/modules/auth/services/token.service';

import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TablasAuxiliaresService {

  private baseURLact = environment.URL_BASE_TABLAS_CAT;

  // URL que obtiene el listado de expedientes
  // private baseURL = "http://localhost:9020/esp/listar";
  // private baseURL2 = "http://localhost:9020/ext/listar";
  // private baseURL3 = "http://localhost:9020/esp/actualizar";
  // private baseURL4 = "http://localhost:9020/esp/mensaje";
  // private baseURL5 = "http://localhost:9020/esp/nuevo";
  // private baseURL6 = "http://localhost:9020/esp/eliminar";
  //url municipios sigpac
  // private baseURLmus = "http://localhost:9020/mus/listar"
  // private baseURLmus2 = "http://localhost:9020/mus/actualizar"
  // private baseURLmus3 = "http://localhost:9020/mus/nuevo"
  // private baseURLmus4 = "http://localhost:9020/mus/eliminar"
  //url servicios territoriales
  // private baseURLset = "http://localhost:9020/set/listar"
  // private baseURLset2 = "http://localhost:9020/set/actualizar"
  // private baseURLset3 = "http://localhost:9020/set/nuevo"
  // private baseURLset4 = "http://localhost:9020/set/eliminar"

  //url expedientes tipos
  // private baseURLext = "http://localhost:9020/ext/listar"
  // private baseURLext2 = "http://localhost:9020/ext/actualizar"
  // private baseURLext3 = "http://localhost:9020/ext/nuevo"
  // private baseURLext4 = "http://localhost:9020/ext/eliminar"

  //url expedientes estados
  // private baseURLexe = "http://localhost:9020/exe/listar"
  // private baseURLexe2 = "http://localhost:9020/exe/actualizar"
  // private baseURLexe3 = "http://localhost:9020/exe/nuevo"
  // private baseURLexe4 = "http://localhost:9020/exe/eliminar"

  //url tipos documentos
  // private baseURLdot = "http://localhost:9020/dot/listar"
  // private baseURLdot2 = "http://localhost:9020/dot/actualizar"
  // private baseURLdot3 = "http://localhost:9020/dot/nuevo"
  // private baseURLdot4 = "http://localhost:9020/dot/eliminar"

  //url tipos domicilios
  // private baseURLdot1 = "http://localhost:9020/dot1/listar"
  // private baseURLdot12 = "http://localhost:9020/dot1/actualizar"
  // private baseURLdot13 = "http://localhost:9020/dot1/nuevo"
  // private baseURLdot14 = "http://localhost:9020/dot1/eliminar"

  //url actividades
  // private baseURLact = "https://localhost:443/tablas/acti"
  // private baseURLact2 = "https://localhost:9020/tablas/acti/actualizar"
  // private baseURLact3 = "https://localhost:9020/tablas/acti/nuevo"
  // private baseURLact4 = "https://localhost:9020/tablas/acti/eliminar"


  //url actividades tipos
  // private baseURLati = "http://localhost:9020/ati/listar"
  // private baseURLati2 = "http://localhost:9020/ati/actualizar"
  // private baseURLati3 = "http://localhost:9020/ati/nuevo"
  // private baseURLati4 = "http://localhost:9020/ati/eliminar"

  //url actividades tipos
  // private baseURLast = "http://localhost:9020/ast/listar"
  // private baseURLast2 = "http://localhost:9020/ast/actualizar"
  // private baseURLast3 = "http://localhost:9020/ast/nuevo"
  // private baseURLast4 = "http://localhost:9020/ast/eliminar"

  //url registro de entrada
  // private baseURLree = "http://localhost:9020/ree/listar"
  // private baseURLree2 = "http://localhost:9020/ree/actualizar"
  // private baseURLree3 = "http://localhost:9020/ree/nuevo"
  // private baseURLree4 = "http://localhost:9020/ree/eliminar"

  //url provincias
  // private baseURLpro = "http://localhost:9020/pro/listar"
  // private baseURLpro2 = "http://localhost:9020/pro/actualizar"
  // private baseURLpro3 = "http://localhost:9020/pro/nuevo"
  // private baseURLpro4 = "http://localhost:9020/pro/eliminar"

  //url poblaciones
  // private baseURLpob = "http://localhost:9020/pob/listar"
  // private baseURLpob2 = "http://localhost:9020/pob/actualizar"
  // private baseURLpob3 = "http://localhost:9020/pob/nuevo"
  // private baseURLpob4 = "http://localhost:9020/pob/eliminar"

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
    const token: string = this.tokenService.getToken();
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Authorization', "Bearer " + token);
    return headers;
  }

  /* #region Tabla Especies */

  obtenerEspecies(): Observable<Especies[]> {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/esp/listar";
    return this.httpClient.get<Especies[]>(url, { headers });
    // return this.httpClient.get<Especies[]>(`${this.baseURL}`);
  }

  actualizarEspecie(id: number, especie: Especies) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/esp/actualizar/" + id;
    return this.httpClient.put<Especies>(url, especie, { headers });
    // return this.httpClient.put(`${this.baseURL3}/${id}`, especie)
  }

  nuevaEspecie(especie: Especies) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/esp/nuevo/";
    return this.httpClient.post<Especies>(url, especie, { headers, });
    // return this.httpClient.post(`${this.baseURL5}`, especie)
  }

  eliminarEspecie(id: number) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/esp/eliminar/" + id;
    return this.httpClient.delete<Especies>(url, { headers });
    // return this.httpClient.delete(`${this.baseURL6}/${id}`);
  }
  /* #endregion */

  /* #region TABLA MUNICIPIOS SIGPAC */

  obtenerMunicipiosSigpac(): Observable<MunicipiosSigpac[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/mus/listar";
    return this.httpClient.get<MunicipiosSigpac[]>(url, { headers });
    // return this.httpClient.get<MunicipiosSigpac[]>(`${this.baseURLmus}`);
  }

  actualizarMunicipioSigpac(id: number, muicipioSigpac: MunicipiosSigpac) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/mus/actualizar/" + id;
    return this.httpClient.put<MunicipiosSigpac>(url, muicipioSigpac, { headers });
    // return this.httpClient.put(`${this.baseURLmus2}/${id}`, muicipioSigpac)
  }

  nuevoMunicipioSigpac(municipiosSigpac: MunicipiosSigpac) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/mus/nuevo";
    return this.httpClient.post<MunicipiosSigpac>(url, municipiosSigpac, { headers });
    // return this.httpClient.post(`${this.baseURLmus3}`, municipiosSigpac)
  }

  eliminarMunicipiosSigpac(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/mus/eliminar/" + id;
    return this.httpClient.delete<MunicipiosSigpac>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLmus4}/${id}`);
  }
  /* #endregion */

  /* #region TABLA SERVICIOS TERRITORIALES */

  obtenerServiciosTerritoriales(): Observable<ServiciosTerritoriales[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/set/listar";
    return this.httpClient.get<ServiciosTerritoriales[]>(url, { headers });
    // return this.httpClient.get<ServiciosTerritoriales[]>(`${this.baseURLset}`);
  }

  actualizarServiciosTerritoriales(id: number, serviciosTerritoriales: ServiciosTerritoriales) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/set/actualizar/" + id;
    return this.httpClient.put<ServiciosTerritoriales>(url, serviciosTerritoriales, { headers });
    // return this.httpClient.put(`${this.baseURLset2}/${id}`, serviciosTerritoriales)
  }

  nuevoServiciosTerritoriales(serviciosTerritoriales: ServiciosTerritoriales) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/set/nuevo";
    return this.httpClient.post<ServiciosTerritoriales>(url, serviciosTerritoriales, { headers });
    // return this.httpClient.post(`${this.baseURLset3}`, serviciosTerritoriales)
  }

  eliminarServiciosTerritoriales(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/set/eliminar/" + id;
    return this.httpClient.delete<ServiciosTerritoriales>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLset4}/${id}`);
  }

  /* #endregion */

  /* #region TABLA EXPEDIENTES TIPOS */

  obtenerExpedientesTipos(): Observable<ExpedientesTipos[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ext/listar";
    return this.httpClient.get<ExpedientesTipos[]>(url, { headers });
    // return this.httpClient.get<ExpedientesTipos[]>(`${this.baseURLext}`);
  }

  actualizarExpedientesTiposs(id: number, expedientesTipos: ExpedientesTipos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ext/actualizar/" + id;
    return this.httpClient.put<ExpedientesTipos>(url, expedientesTipos, { headers });
    // return this.httpClient.put(`${this.baseURLext2}/${id}`, expedientesTipos)
  }

  nuevoExpedientesTipos(expedientesTipos: ExpedientesTipos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ext/nuevo";
    return this.httpClient.post<ExpedientesTipos>(url, expedientesTipos, { headers });
    // return this.httpClient.post(`${this.baseURLext3}`, expedientesTipos)
  }

  eliminarExpedientesTipos(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ext/eliminar/" + id;
    return this.httpClient.delete<ExpedientesTipos>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLext4}/${id}`);
  }

  /* #endregion */

  /* #region TABLA EXPEDIENTES ESTADOS */

  obtenerExpedientesEstados(): Observable<ExpedientesEstados[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/exe/listar";
    return this.httpClient.get<ExpedientesEstados[]>(url, { headers });
    // return this.httpClient.get<ExpedientesEstados[]>(`${this.baseURLexe}`);
  }


  actualizarExpedientesEstados(id: number, expedientesEstados: ExpedientesEstados) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/exe/actualizar/" + id;
    return this.httpClient.put<ExpedientesEstados>(url, expedientesEstados, { headers });
    // return this.httpClient.put(`${this.baseURLexe2}/${id}`, expedientesEstados)
  }

  nuevoExpedientesEstados(expedientesEstados: ExpedientesEstados) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/exe/nuevo";
    return this.httpClient.post<ExpedientesEstados>(url, expedientesEstados, { headers });
    // return this.httpClient.post(`${this.baseURLexe3}`, expedientesEstados)
  }

  eliminarExpedientesEstados(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/exe/eliminar/" + id;
    return this.httpClient.delete<ExpedientesEstados>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLexe4}/${id}`);
  }

  /* #endregion */

  /* #region TABLA TIPOS DOCUMENTOS */

  obtenerTiposDocumentos(): Observable<TiposDoumentos[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot/listar";
    return this.httpClient.get<TiposDoumentos[]>(url, { headers });
    // return this.httpClient.get<TiposDoumentos[]>(`${this.baseURLdot}`);
  }

  actualizarTiposDocumentos(id: number, tiposDoumentos: TiposDoumentos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot/actualizar/" + id;
    return this.httpClient.put<TiposDoumentos>(url, tiposDoumentos, { headers });
    // return this.httpClient.put(`${this.baseURLdot2}/${id}`, tiposDoumentos)
  }

  nuevoTiposDocumentos(expedientesEstados: TiposDoumentos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot/nuevo";
    return this.httpClient.post<TiposDoumentos>(url, expedientesEstados, { headers });
    // return this.httpClient.post(`${this.baseURLexe3}`, expedientesEstados)
  }

  eliminarTiposDocumentos(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot/eliminar/" + id;
    return this.httpClient.delete<TiposDoumentos>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLdot4}/${id}`);
  }

  /* #endregion */

  /* #region TABLA TIPOS DE DOMICILIOS */

  obtenerTiposDomicilios(): Observable<TiposDomicilios[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot1/listar";
    return this.httpClient.get<TiposDomicilios[]>(url, { headers });
    // return this.httpClient.get<TiposDomicilios[]>(`${this.baseURLdot1}`);
  }

  actualizarTiposDomicilios(id: number, tiposDomicilios: TiposDomicilios) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot1/actualizar/" + id;
    return this.httpClient.put<TiposDomicilios>(url, tiposDomicilios, { headers });
    // return this.httpClient.put(`${this.baseURLdot12}/${id}`, tiposDomicilios)
  }

  nuevoTiposDomicilios(tiposDomicilios: TiposDomicilios) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot1/nuevo";
    return this.httpClient.post<TiposDomicilios>(url, tiposDomicilios, { headers });
    // return this.httpClient.post(`${this.baseURLdot13}`, tiposDomicilios)
  }

  eliminarTiposDomicilios(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/dot1/eliminar/" + id;
    return this.httpClient.delete<TiposDomicilios>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLdot14}/${id}`);
  }
  /* #endregion */

  /* #region TABLA ACTIVIDADES */

  obtenerActividades(): Observable<Actividades[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/acti/listar";
    return this.httpClient.get<Actividades[]>(url, { headers });
  }

  actualizarActividades(id: number, actividades: Actividades) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/acti/actualizar/" + id;
    actividades.for000Actividadessubtipo.astActividadsubtipoid = actividades.actActividadsubtipoid;
    return this.httpClient.put<Actividades[]>(url, actividades, { headers });
    // return this.httpClient.put(`${this.baseURLact}/${id}`, actividades)
  }

  nuevoActividades(actividades: Actividades) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/acti/nuevo";
    actividades.for000Actividadessubtipo.astActividadsubtipoid = actividades.actActividadsubtipoid;
    return this.httpClient.post<Actividades[]>(url, actividades, { headers });
    // return this.httpClient.post(`${this.baseURLact}`, actividades)
  }

  eliminarActividades(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/acti/eliminar/" + id;
    return this.httpClient.delete<Actividades[]>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLact}/${id}`);
  }

  /* #endregion */

  /* #region TABLA ACTIVIDADES TIPOS */

  obtenerActividadesTipos(): Observable<ActividadesTipos[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ati/listar";
    return this.httpClient.get<ActividadesTipos[]>(url, { headers });
    // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
    // return this.httpClient.get<ActividadesTipos[]>(`${this.baseURLati}`);
  }

  actualizarActividadesTipos(id: number, actividadesTipos: ActividadesTipos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ati/actualizar/" + id;
    return this.httpClient.put<ActividadesTipos>(url, actividadesTipos, { headers });
    // return this.httpClient.put(`${this.baseURLati2}/${id}`, actividadesTipos)
  }

  nuevoActividadesTipos(actividadesTipos: ActividadesTipos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ati/nuevo";
    return this.httpClient.post<ActividadesTipos[]>(url, actividadesTipos, { headers });
    // return this.httpClient.post(`${this.baseURLati3}`, actividadesTipos)
  }

  eliminarActividadesTipos(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ati/eliminar/" + id;
    return this.httpClient.delete<ActividadesTipos>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLati4}/${id}`);
  }

  /* #endregion */

  /* #region TABLA ACTIVIDADES SUBTIPOS */

  obtenerActividadesSubtipos(): Observable<ActividadesSubtipos[]> {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ast/listar";
    return this.httpClient.get<ActividadesSubtipos[]>(url, { headers });
    // return this.httpClient.get<ActividadesSubtipos[]>(`${this.baseURLast}`);
  }

  actualizarActividadesSubtipos(id: number, actividadesSubtipos: ActividadesSubtipos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ast/actualizar";
    actividadesSubtipos.for000Actividadestipo.atiActividadtipoid = actividadesSubtipos.astActividadtipoid;
    return this.httpClient.put<ActividadesSubtipos[]>(url, actividadesSubtipos, { headers });
    // return this.httpClient.put(`${this.baseURLast2}/${id}`, actividadesSubtipos)
  }

  nuevoActividadesSubtipos(actividadesSubtipos: ActividadesSubtipos) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ast/nuevo";
    actividadesSubtipos.for000Actividadestipo.atiActividadtipoid = actividadesSubtipos.astActividadtipoid;
    return this.httpClient.post<ActividadesSubtipos[]>(url, actividadesSubtipos, { headers });
    // return this.httpClient.post(`${this.baseURLast3}`, actividadesSubtipos)
  }

  eliminarActividadesSubtipos(id: number) {
    let headers = this.getHeaders();
    let url = this.baseURLact + "/ast/eliminar/" + id;
    return this.httpClient.delete<ActividadesSubtipos[]>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLast4}/${id}`);
  }

  /* #endregion */

  /* #region TABLA REGISTRO DE ENTRADA */

  obtenerRegistroEntrada(): Observable<RegistroEntrada[]> {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/ree/listar";
    return this.httpClient.get<RegistroEntrada[]>(url, { headers });
  }

  actualizarRegistroEntrada(id: number, registroEntrada: RegistroEntrada) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/ree/actualizar/" + id;
    return this.httpClient.put<RegistroEntrada[]>(url, registroEntrada, { headers });
    // return this.httpClient.put(`${this.baseURLree2}/${id}`, registroEntrada)
  }

  nuevoRegistroEntrada(registroEntrada: RegistroEntrada) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/ree/nuevo/";
    return this.httpClient.post<RegistroEntrada[]>(url, registroEntrada, { headers, });
    // return this.httpClient.post(`${this.baseURLree3}`, registroEntrada)
  }

  eliminarRegistroEntrada(id: number) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/ree/eliminar/" + id;
    return this.httpClient.delete<RegistroEntrada[]>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLree4}/${id}`);
  }

  /* #endregion */

  /* #region TABLA PROVINCIAS */

  obtenerProvincias(): Observable<Provincias[]> {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pro/listar";
    return this.httpClient.get<Provincias[]>(url, { headers });
    // return this.httpClient.get<Provincias[]>(`${this.baseURLpro}`);
  }


  actualizarProvincias(id: number, provincias: Provincias) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pro/actualizar/" + id;
    return this.httpClient.put<Provincias>(url, provincias, { headers });
    // return this.httpClient.put(`${this.baseURLpro2}/${id}`, provincias)
  }

  nuevoProvincias(provincias: Provincias) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pro/nuevo/";
    return this.httpClient.post<Provincias>(url, provincias, { headers, });
    // return this.httpClient.post(`${this.baseURLpro3}`, provincias)
  }

  eliminarProvincias(id: number) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pro/eliminar/" + id;
    return this.httpClient.delete<Provincias>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLpro4}/${id}`);
  }
  /* #endregion */

  /* #region TABLA POBLACIONES */
  obtenerPoblaciones(): Observable<Poblaciones[]> {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pob/listar";
    return this.httpClient.get<Poblaciones[]>(url, { headers });
    // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
    // return this.httpClient.get<Poblaciones[]>(`${this.baseURLpob}`);
  }

  actualizarPoblaciones(id: number, poblaciones: Poblaciones) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pob/actualizar/" + id;
    poblaciones.for000Provincias.proProvinciaid = poblaciones.pobProvinciaid;
    return this.httpClient.put<Poblaciones>(url, poblaciones, { headers });
    // return this.httpClient.put(`${this.baseURLpob2}/${id}`, poblaciones)
  }

  nuevoPoblaciones(poblaciones: Poblaciones) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pob/nuevo/";
    poblaciones.for000Provincias.proProvinciaid = poblaciones.pobProvinciaid;
    return this.httpClient.post<Poblaciones>(url, poblaciones, { headers, });
    // return this.httpClient.post(`${this.baseURLpob3}`, poblaciones)
  }

  eliminarPoblaciones(id: number) {
    let headers = this.getHeaders();
    let url = environment.URL_BASE_TABLAS_CAT + "/pob/eliminar/" + id;
    return this.httpClient.delete<Poblaciones>(url, { headers });
    // return this.httpClient.delete(`${this.baseURLpob4}/${id}`);
  }
  /* #endregion */

}

