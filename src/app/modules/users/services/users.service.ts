import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserFromBack } from '../models/user-from-back';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from 'app/modules/auth/services/token.service';
import { environment } from '../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // baseUrl = 'https://localhost:443/crud-user';
  baseUrl = environment.URL_BASE_CRUD_USERS;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getUsers(): Observable<UserFromBack[]> {
    let headers = new HttpHeaders()
    const token:string = this.tokenService.getToken();
    headers=headers.set('content-type','application/json')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    headers=headers.set('Authorization', "Bearer " +token);

    console.log(headers)
    let url = this.baseUrl + '/users';
    return this.http.get<UserFromBack[]>(url, {headers});
  }

}
