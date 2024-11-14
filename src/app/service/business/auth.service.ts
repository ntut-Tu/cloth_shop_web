import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { UserRoleModel } from '../../model/user-role.model';
import { RegisterRequestModel } from '../../model/register-request.model';
import {AuthApiService} from "../api/auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authApiService: AuthApiService, private cookieService: CookieService) { }

  /**
   * 執行用戶登入流程，將憑證傳送到後端。
   * 若登入成功則將 JWT token 儲存於 cookie 中。
   * @param username - 用戶名稱
   * @param password - 用戶密碼
   * @param role - 用戶角色
   * @returns Observable<boolean> - 登入成功回傳 true，失敗回傳 false
   */
  login(username: string, password: string, role: UserRoleModel): Observable<boolean> {
    return this.authApiService.login(username, password, role).pipe(
      map(response => {
        if (response.status && response.data?.token) {
          // 如果登入成功，儲存 JWT token 到 cookie
          this.cookieService.set('token', response.data.token, { path: '/', sameSite: 'Lax' });
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error('登入失敗', error);
        return of(false); // 發生錯誤時回傳 false
      })
    );
  }

  /**
   * 檢查具有指定用戶名和角色的用戶是否存在。
   * @param username - 用戶名稱
   * @param role - 用戶角色
   * @returns Observable<boolean> - 若用戶存在回傳 true，否則回傳 false
   */
  checkUser(username: string, role: UserRoleModel): Observable<boolean> {
    return this.authApiService.checkUser(username, role).pipe(
      map(response => response.status), // 將回應狀態映射為布林值
      catchError(error => {
        console.error('檢查用戶失敗', error);
        return of(false); // 發生錯誤時回傳 false
      })
    );
  }

  /**
   * 使用提供的詳細資料註冊新用戶。
   * @param registerData - 用戶註冊資料
   * @returns Observable<boolean> - 若註冊成功回傳 true，否則回傳 false
   */
  registerDetails(registerData: RegisterRequestModel): Observable<boolean> {
    return this.authApiService.register(registerData).pipe(
      map(response => response.status), // 將回應狀態映射為布林值
      catchError(error => {
        console.error('註冊失敗', error);
        return of(false); // 發生錯誤時回傳 false
      })
    );
  }

  /**
   * 從 cookie 中取得 JWT token。
   * @returns string | null - 返回 JWT token 或 null（若不存在）
   */
  getToken(): string | null {
    return this.cookieService.get('token');
  }

  /**
   * 執行登出，從 cookie 中刪除 JWT token。
   */
  logout(): void {
    this.cookieService.delete('token', '/');
  }
}
