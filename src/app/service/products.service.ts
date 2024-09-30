import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../model/product.model';  // 引入商品模型

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): Observable<ProductModel[]> {
    // 假數據
    const products: ProductModel[] = [
      {
        id: 1,
        name: 'T-shirt',
        description: 'Comfortable cotton T-shirt',
        price: 19.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Jeans',
        description: 'Stylish blue jeans',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Sneakers',
        description: 'Sporty sneakers for everyday use',
        price: 69.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 4,
        name: 'Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 5,
        name: 'Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 6,
        name: 'Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 7,
        name: 'Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 8,
        name: 'Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 9,
        name: 'Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 10,
        name: 'Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150'
      }
    ];

    return of(products);  // 使用 rxjs 的 `of` 返回假数据作為 Observable
  }
}
