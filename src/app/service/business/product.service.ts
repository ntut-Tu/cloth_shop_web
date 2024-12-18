import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResponseDTO} from '../../model/api-response.model';
import {AddProductRequest, ProductDetail, ProductSummaryModel} from '../../model/product/product-summary.model';
import {ProductApiService} from '../api/product-api.service';
import {ImageUploadApiService} from "../api/image-upload-api.service";
import {FetchProductsParams} from "../../model/product/FetchProductsParams.model";
import {PaginatedResponse, ProductInfo} from "../../model/product/product-summary-v2.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productApiService: ProductApiService,private imageUploadApiService: ImageUploadApiService) {}

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

  // -----------------------------------------------------------------------------------------------------------
  getProducts(fetchParams:FetchProductsParams): Observable<ApiResponseDTO<PaginatedResponse>> {
    return this.productApiService.fetchProducts(fetchParams);
  }

  getProductListForCoupon(): Observable<ApiResponseDTO<ProductInfo[]>> {
    return this.productApiService.getProductListForCoupon();
  }

  updateProductStatus(productVariantId:number, updatedStatus: boolean) {
    return this.productApiService.updateProductStatus(productVariantId, updatedStatus);
  }

  updateProductStock(productVariantId:number, newStock: any) {
    return this.productApiService.updateProductStock(productVariantId, newStock);
  }
}
