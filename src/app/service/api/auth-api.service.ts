import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserRoleModel } from '../../model/user-role.model';
import { RegisterRequestModel } from '../../model/register-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private apiUrl = environment.baseUrl + '/api/auth';

  constructor(private http: HttpClient) { }

  /**
   * 傳送登入請求至後端，包含用戶憑證。
   * @param username - 用戶名稱
   * @param password - 用戶密碼
   * @param role - 用戶角色
   * @returns Observable，包含回應狀態、訊息及數據（成功時返回 token）
   */
  login(username: string, password: string, role: UserRoleModel): Observable<{ status: boolean, message: string, data: { token: string } | null }> {
    const loginData = { username, password, role };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // POST 請求至登入端點
    return this.http.post<{ status: boolean, message: string, data: { token: string } | null }>(
      `${this.apiUrl}/login`, loginData, { headers, responseType: 'json' }
    );
  }

  /**
   * 透過傳送用戶名和角色至後端來檢查用戶是否存在。
   * @param username - 用戶名稱
   * @param role - 用戶角色
   * @returns Observable，包含回應狀態與訊息
   */
  checkUser(username: string, role: UserRoleModel): Observable<{ status: boolean, message: string, data: null }> {
    const checkData = { username, role };

    // POST 請求至檢查用戶端點
    return this.http.post<{ status: boolean, message: string, data: null }>(
      `${this.apiUrl}/checkUser`, checkData
    );
  }

  /**
   * 傳送註冊資料至後端以建立新用戶帳戶。
   * @param registerData - 用戶註冊資料
   * @returns Observable，包含回應狀態與訊息
   */
  register(registerData: RegisterRequestModel): Observable<{ status: boolean, message: string, data: null }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ status: boolean, message: string, data: null }>(
      `${this.apiUrl}/registerDetails`, registerData, { headers }
    );
  }
}
