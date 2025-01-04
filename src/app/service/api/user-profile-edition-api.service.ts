import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponseDTO } from "../../model/api-response.model";
import {UserProfileModel, UserInfoUpdateDto, EditUserProfileModel} from "../../model/user-manage/user-profile.model";

@Injectable({
  providedIn: 'root'
})

export class UserProfileEditionApiService {
  private apiUrl = environment.baseUrl + '/api/editUserProfile';

  constructor(private http: HttpClient) { }

  /**
   * 獲取使用者資料
   */
  getUserInfo(): Observable<ApiResponseDTO<EditUserProfileModel>> {
    return this.http.get<ApiResponseDTO<EditUserProfileModel>>(`${this.apiUrl}/`);
  }

  /**
   * 更新使用者資料
   */
  updateUserInfo(updateDto: UserInfoUpdateDto): Observable<ApiResponseDTO<UserInfoUpdateDto>> {
    return this.http.post<ApiResponseDTO<UserInfoUpdateDto>>(`${this.apiUrl}/`, updateDto);
  }
}
