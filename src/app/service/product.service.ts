import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';
import {ApiResponseDTO} from "../model/api-response.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AddProductRequest, ProductDetail, ProductSummaryModel} from "../model/product-summary.model";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";  // 引入商品模型

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.baseUrl + '/api/products';

  constructor(private http: HttpClient) {}

  getProductSummaries(page: number = 1, pageSize: number = 30): Observable<ApiResponseDTO<ProductSummaryModel[]>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<ApiResponseDTO<ProductSummaryModel[]>>(this.apiUrl+'/summaries', { params });
  }
  getProductDetails(productId: number): Observable<ApiResponseDTO<ProductDetail>> {
    return this.http.get<ApiResponseDTO<any>>(this.apiUrl + `/details/${productId}`).pipe(
      map(response => {
        // 將 productVariantRepositoryDTO 重新命名為 productVariants
        if (response.data && response.data.productVariantRepositoryDTO) {
          response.data.productVariants = response.data.productVariantRepositoryDTO;
          delete response.data.productVariantRepositoryDTO; // 刪除原始屬性
        }
        return response as ApiResponseDTO<ProductDetail>;
      })
    );
  }

  addProduct(product: AddProductRequest, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/add`, product, { headers });
  }
}
