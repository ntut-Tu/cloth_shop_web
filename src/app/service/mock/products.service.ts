import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../model/product';  // 引入商品模型

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): Observable<Product[]> {
    // 假數據，包含 seller_id 和 seller_name
    const products: Product[] = [
      {
        id: 1,
        name: 'Cotton T-shirt',
        description: 'Comfortable cotton T-shirt',
        price: 19.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 101,
        seller_name: 'Fashion Hub'
      },
      {
        id: 2,
        name: 'Classic Blue Jeans',
        description: 'Stylish blue jeans',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 102,
        seller_name: 'Denim World'
      },
      {
        id: 3,
        name: 'Running Sneakers',
        description: 'Sporty sneakers for everyday use',
        price: 69.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 103,
        seller_name: 'Sneaker City'
      },
      {
        id: 4,
        name: 'Summer Straw Hat',
        description: 'A trendy summer hat',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 104,
        seller_name: 'Hat Heaven'
      },
      {
        id: 5,
        name: 'Winter Beanie',
        description: 'Warm and cozy beanie for winter',
        price: 14.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 104,
        seller_name: 'Hat Heaven'
      },
      {
        id: 6,
        name: 'Fedora Hat',
        description: 'A stylish fedora for casual wear',
        price: 19.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 104,
        seller_name: 'Hat Heaven'
      },
      {
        id: 7,
        name: 'Baseball Cap',
        description: 'A sporty cap for outdoor activities',
        price: 12.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 104,
        seller_name: 'Hat Heaven'
      },
      {
        id: 8,
        name: 'Sun Hat',
        description: 'A wide-brimmed hat perfect for sunny days',
        price: 18.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 104,
        seller_name: 'Hat Heaven'
      },
      {
        id: 9,
        name: 'Wool Scarf',
        description: 'A soft wool scarf for chilly days',
        price: 24.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 105,
        seller_name: 'Scarf Emporium'
      },
      {
        id: 10,
        name: 'Leather Gloves',
        description: 'Stylish and warm leather gloves',
        price: 34.99,
        imageUrl: 'https://via.placeholder.com/150',
        seller_id: 105,
        seller_name: 'Scarf Emporium'
      }
    ];

    return of(products);  // 使用 rxjs 的 `of` 返回假数据作為 Observable
  }
}
