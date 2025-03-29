import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

const AUTH_API = 'http://localhost:8088/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
    // Check if the token exists in local storage
    return !!localStorage.getItem('authToken');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(username: string, nomEtPrenom: string, matricule: string, adresse: string, numero: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      nomEtPrenom,
      matricule,
      adresse,
      numero,
      email,
      password
    }, httpOptions);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(AUTH_API + 'signup', user, httpOptions);
  }

  forgotPassword(email: any): Observable<any> {
    return this.http.post(`${AUTH_API}forgot-password`, {email});
  }

  resetPassword(token: string, newPassword: any) {
    return this.http.post<any>(`${AUTH_API}reset-password?token=${token}`, {newPassword: newPassword});
  }

  GetToken() {
    return localStorage.getItem('token') || '';
  }
}
