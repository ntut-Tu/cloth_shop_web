import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoUpdateDto, UserProfileModel } from "../../model/user-manage/user-profile.model";
import { UserProfileEditionApiService } from "../api/user-profile-edition-api.service";
import { ImageUploadApiService } from "../api/image-upload-api.service";
import { ApiResponseDTO } from "../../model/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class UserProfileEditionService {

  constructor(
    private userProfileEditionApiService: UserProfileEditionApiService,
    private imageUploadApiService: ImageUploadApiService
  ) { }

  /**
   * 獲取使用者資料
   */
  getUserInfo(): Observable<ApiResponseDTO<UserProfileModel>> {
    return this.userProfileEditionApiService.getUserInfo();
  }

  /**
   * 更新使用者資料
   */
  updateUserInfo(updateDto: UserInfoUpdateDto): Observable<ApiResponseDTO<UserInfoUpdateDto>> {
    return this.userProfileEditionApiService.updateUserInfo(updateDto);
  }

  /**
   * 上傳使用者頭像
   */
  uploadUserPortrait(file: Blob): Observable<ApiResponseDTO<string>> {
    // 如果使用通用的圖片上傳服務
    return this.imageUploadApiService.uploadPortraitImage(file as File);
  }
}
