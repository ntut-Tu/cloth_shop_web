import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponseDTO} from "../../model/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadApiService {

  private apiUrl = environment.baseUrl + '/api';

  constructor(private http: HttpClient) {}

  /**
   * 上传图片到后端 API
   * @param file - 要上传的图片文件
   * @returns 包含图片 URL 的 ApiResponseDTO
   */
  uploadProductImage(file: File): Observable<ApiResponseDTO<string>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ApiResponseDTO<string>>(`${this.apiUrl}/upload/product-image`, formData);
  }


  /**
   * 上傳用戶頭像
   * @param file - 要上傳的頭像文件
   * @return 包含用戶頭像的 URL 的 ApiResponseDTO
   */
  uploadPortraitImage(file: File): Observable<ApiResponseDTO<string>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<ApiResponseDTO<string>>(`${this.apiUrl}/upload/portrait-image`, formData);
  }
}
