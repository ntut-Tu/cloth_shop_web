import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeJWTs: { [role: string]: string } = {
    'admin': 'fake-jwt-admin',
    'customer': 'fake-jwt-customer',
    'vendor': 'fake-jwt-vendor'
  };

  login(username: string, password: string, role: string): Observable<boolean> {
    // 模擬用
    if (username === 'admin' && password === '123' && role === 'admin') {
      localStorage.setItem('token', this.fakeJWTs['admin']);
      return of(true);
    } else if (username === 'customer' && password === '123' && role === 'customer') {
      localStorage.setItem('token', this.fakeJWTs['customer']);
      return of(true);
    } else if (username === 'vendor' && password === '123' && role === 'vendor') {
      localStorage.setItem('token', this.fakeJWTs['vendor']);
      return of(true);
    }
    return of(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
