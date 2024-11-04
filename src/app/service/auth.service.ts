import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {UserRole} from "../model/user.role";
import {RegisterRequest} from "../model/RegisterRequest";



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

    return this.http.post<{ status: boolean, message: string, data: { token: string } | null }>(
      `${this.apiUrl}/login`, loginData, { headers, responseType: 'json' }
    ).pipe(
      map(response => {
        if (response.status && response.data?.token) {
          localStorage.setItem('token', response.data.token);
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


  checkUser(username: string, role: UserRole): Observable<boolean> {
    const checkData = { username, role };

    return this.http.post<{ status: boolean, message: string, data: null }>(
      `${this.apiUrl}/checkUser`, checkData
    ).pipe(
      map(response => response.status),
      catchError(error => {
        console.error('Check user failed', error);
        return of(false);
      })
    );
  }


  registerDetails(registerData: RegisterRequest): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<{ status: boolean, message: string, data: null }>(
      `${this.apiUrl}/registerDetails`, registerData, { headers }
    ).pipe(
      map(response => response.status),
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
