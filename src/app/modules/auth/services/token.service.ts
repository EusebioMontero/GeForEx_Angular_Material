import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    const token = sessionStorage.getItem(TOKEN_KEY);
    return token==null?"":token;
  }

  // public setUserName(userName: string): void {
  //   window.sessionStorage.removeItem(USERNAME_KEY);
  //   window.sessionStorage.setItem(USERNAME_KEY, userName);
  // }

  // public getUserName(): string {
  //   const userKey = sessionStorage.getItem(USERNAME_KEY);
  //   return userKey==null?"":userKey;
  // }

  // public setAuthorities(authorities: string[]): void {
  //   window.sessionStorage.removeItem(AUTHORITIES_KEY);
  //   window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  // }

  // public getAuthorities(): string[] {
  //   this.roles = [];
  //   const authorities = sessionStorage.getItem(AUTHORITIES_KEY);
  //   if (authorities) {
  //     JSON.parse(authorities).forEach((auth: { authority: string; })=> {
  //       this.roles.push(auth.authority);
  //     });
  //   }
  //   return this.roles;
  // }

  // public logOut(): void {
  //   window.sessionStorage.clear();
  // }
}