import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // authURL = 'https://localhost:443/auth/';
  // authURL = 'http://192.168.105.63:7001/jwt/auth/';
  authURL = environment.URL_BASE_AUTH;
  constructor(private httpClient: HttpClient) { }
  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
