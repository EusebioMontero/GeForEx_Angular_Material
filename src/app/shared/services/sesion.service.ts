import { Injectable } from '@angular/core';

const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  roles: Array<string> = [];

  constructor() { }

  public isLoggedIn(): boolean {
    return this.getUserName() !== '';
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    const userKey = sessionStorage.getItem(USERNAME_KEY);
    return userKey==null?"":userKey;
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    const authorities = sessionStorage.getItem(AUTHORITIES_KEY);
    if (authorities) {
      JSON.parse(authorities).forEach((auth: { authority: string; })=> {
        this.roles.push(auth.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
