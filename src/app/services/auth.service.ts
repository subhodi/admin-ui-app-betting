import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  constructor(public http: HttpClient) { }

  private clearBrowserToken() {
    localStorage.clear();
  }

  private setBrowserToken(username: string) {
    localStorage.setItem('username', username);
  }

  private hashPassword(password): string {
    return <string>Md5.hashStr(password);
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  setUserAuthenticated(username: string, redirectUrl: string) {
    this.setBrowserToken(username);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('username') ? true : false;
  }

  signUp(username: string, password: string) {
    password = this.hashPassword(password);
    return this.http.post(environment.apiUrl + '/admin/sign-up', { username, password });
  }

  signIn(username: string, password: string) {
    password = this.hashPassword(password);
    return this.http.post(environment.apiUrl + '/admin/sign-in', { username, password });
  }

  signOut() {
    this.clearBrowserToken();
  }
}
