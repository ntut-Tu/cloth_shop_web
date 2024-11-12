import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { UserRoleModel } from "../model/user-role.model";
import { RegisterRequestModel } from "../model/register-request.model";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.baseUrl + '/api/auth';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(username: string, password: string, role: UserRoleModel): Observable<boolean> {
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
          // 儲存 JWT 到 cookie
          this.cookieService.set('token', response.data.token, { path: '/', sameSite: 'Lax' });
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

  checkUser(username: string, role: UserRoleModel): Observable<boolean> {
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

  registerDetails(registerData: RegisterRequestModel): Observable<boolean> {
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

  // 從 cookie 中取得 token
  getToken(): string | null {
    return this.cookieService.get('token');
  }

  logout(): void {
    this.cookieService.delete('token', '/');
  }
}
