// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string, role: string): Observable<boolean> {
    // 模擬用
    if (username === 'admin' && password === '123' && role === 'admin') {
      return of(true);
    } else if (username === 'customer' && password === '123' && role === 'customer') {
      return of(true);
    } else if (username === 'vendor' && password === '123' && role === 'vendor') {
      return of(true);
    }
    return of(false);
  }
}
