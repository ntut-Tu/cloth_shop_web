import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ApiResponseDTO} from "../../model/api-response.model";
import {Observable} from "rxjs";
import {UserInfoModel} from "../../model/user-info.model";

@Injectable({
  providedIn: 'root'
})

export class UserManageApiService {
  private apiUrl =  environment.baseUrl + '/api/admin';

  constructor(private http: HttpClient) { }

  /**
   * 取得所有使用者列表
   * @returns 包含使用者列表的 ApiResponseDTO
   */
  getUsers(page: number, pageSize: number): Observable<ApiResponseDTO<UserInfoModel[]>> {
    const params = { page: page.toString(), size: pageSize.toString() }; // 转换为字符串
    return this.http.get<ApiResponseDTO<UserInfoModel[]>>(`${this.apiUrl}/users`, { params });
  }


  banUser(userId: number): Observable<ApiResponseDTO<any>> {
    const body = { userId };
    return this.http.post<ApiResponseDTO<any>>(`${this.apiUrl}/banUser`, body);
  }

}
