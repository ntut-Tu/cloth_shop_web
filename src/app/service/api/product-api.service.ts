import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponseDTO } from '../../model/api-response.model';
import { ProductSummaryModel, ProductDetail, AddProductRequest } from '../../model/product/product-summary.model';
import { map } from 'rxjs/operators';
import {FetchProductsParams} from "../../model/product/FetchProductsParams.model";
import {PaginatedResponse, ProductInfo} from "../../model/product/product-summary-v2.model";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private apiUrl = environment.baseUrl + '/api/products';

  constructor(private http: HttpClient) {}

  /**
   * 從後端 API 獲取特定產品的詳細資訊
   * @param productId - 產品 ID
   * @returns 包含產品詳細資訊的 ApiResponseDTO
   */
  getProductDetails(productId: number): Observable<ApiResponseDTO<ProductDetail>> {
    return this.http.get<ApiResponseDTO<any>>(`${this.apiUrl}/details/${productId}`).pipe(
      map(response => {
        // 將 productVariantRepositoryDTO 重新命名為 productVariants
        if (response.data && response.data.productVariantRepositoryDTO) {
          response.data.productVariants = response.data.productVariantRepositoryDTO;
          delete response.data.productVariantRepositoryDTO;
        }
        return response as ApiResponseDTO<ProductDetail>;
      })
    );
  }

  /**
   * 向後端 API 添加新產品
   * @param product - 要添加的產品請求資料
   * @returns 新增產品的操作結果
   */
  addProduct(product: AddProductRequest): Observable<ApiResponseDTO<number>> {
    return this.http.post<ApiResponseDTO<number>>(`${this.apiUrl}/add`, product);
  }

  fetchProducts(fetchParams: FetchProductsParams): Observable<ApiResponseDTO<PaginatedResponse>> {
    let httpParams = new HttpParams()
      .set('page', fetchParams.page.toString())
      .set('pageSize', fetchParams.pageSize.toString())
      .set('role', fetchParams.role);

    if (fetchParams.category) {
      httpParams = httpParams.set('category', fetchParams.category);
    }
    if (fetchParams.sort) {
      httpParams = httpParams.set('sort', fetchParams.sort);
    }
    if (fetchParams.search) {
      httpParams = httpParams.set('search', fetchParams.search);
    }

    return this.http.get<ApiResponseDTO<PaginatedResponse>>(`${this.apiUrl}/v2`, { params: httpParams });
  }

  getProductListForCoupon(): Observable<ApiResponseDTO<ProductInfo[]>> {
    return this.http.get<ApiResponseDTO<ProductInfo[]>>(`${this.apiUrl}/product-list-for-coupon`);
  }
}
