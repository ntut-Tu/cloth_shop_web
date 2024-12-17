import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseDTO } from '../../model/api-response.model';
import { ProductSummaryModel, ProductDetail, AddProductRequest } from '../../model/product-summary.model';
import { ProductApiService } from '../api/product-api.service';
import {ImageUploadApiService} from "../api/image-upload-api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productApiService: ProductApiService,private imageUploadApiService: ImageUploadApiService) {}

  /**
   * 獲取產品摘要列表
   * @param page - 分頁的頁碼（默認為 1）
   * @param pageSize - 每頁顯示的產品數量（默認為 30）
   * @returns 包含產品摘要列表的 ApiResponseDTO
   */
  getProductSummaries(page: number = 1, pageSize: number = 30): Observable<ApiResponseDTO<ProductSummaryModel[]>> {
    return this.productApiService.getProductSummaries(page, pageSize);
  }

  /**
   * 獲取特定產品的詳細資訊
   * @param productId - 產品 ID
   * @returns 包含產品詳細資訊的 ApiResponseDTO
   */
  getProductDetails(productId: number): Observable<ApiResponseDTO<ProductDetail>> {
    return this.productApiService.getProductDetails(productId);
  }

  /**
   * 添加新產品
   * @param product - 要添加的產品請求資料
   * @returns 新增產品的操作結果
   */
  addProduct(product: AddProductRequest): Observable<ApiResponseDTO<number>> {
    return this.productApiService.addProduct(product);
  }

  /**
   * 上传图片
   * @param file - 要上传的图片文件
   * @returns 包含图片 URL 的 ApiResponseDTO
   */
  uploadProductImage(file: File): Observable<ApiResponseDTO<string>> {
    return this.imageUploadApiService.uploadProductImage(file);
  }

  getProductSummariesByCategory(category: string,pageNumber:number,pageSize:number): Observable<ApiResponseDTO<ProductSummaryModel[]>> {
    return this.productApiService.getProductSummariesByCategory(category,pageNumber,pageSize);
  }

  searchProduct(searchKeyword: string,pageNumber:number,pageSize:number):Observable<ApiResponseDTO<ProductSummaryModel[]>> {
    return this.productApiService.searchProduct(searchKeyword,pageNumber,pageSize);
  }
}
