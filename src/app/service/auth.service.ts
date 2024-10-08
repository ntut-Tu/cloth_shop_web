import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {UserRole} from "../model/user.role";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl =  environment.baseUrl+'/api/auth';

  constructor(private http: HttpClient) { }
  login(username: string, password: string, role: UserRole): Observable<boolean> {
    const loginData = {
      username: username,
      password: password,
      role: role
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, loginData, {headers, responseType: 'json'})
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            return true;
          }
          return false;
        }),
        catchError(error => {
          console.error('Login failed', error);
          return of(false);
        })
      );
  }

  register(username: string, email: string, password: string, role: UserRole): Observable<boolean> {
    const registerData = {
      username: username,
      email: email,
      password: password,
      role: role
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/register`, registerData,{headers, responseType: 'json'})
      .pipe(
        map(response => response.success || false),
        catchError(error => {
          console.error('Registration failed', error);
          return of(false);
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
