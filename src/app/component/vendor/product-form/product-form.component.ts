import { Component } from '@angular/core';
import {AddProductRequest, ProductDetail, ProductVariant} from "../../../model/product-summary.model";
import {ProductService} from "../../../service/business/product.service";
import {AuthService} from "../../../service/business/auth.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  // 使用 AddProductRequest 作為 product 的資料結構
  product: AddProductRequest = {
    productId: 0, // 可以忽略，後端會生成
    name: '',
    description: '',
    imageUrl: '',
    category: '',
    isList: true,
    fkVendorId: 1, // 假設一個預設的商家 ID
    productVariants: [] // 初始為空的變體列表
  };

  newVariant: ProductVariant = {
    productVariantId: 0,
    color: '',
    stock: 0,
    size: '',
    price: 0
  };

  constructor(private productService: ProductService, private authService: AuthService) {}

  addVariant() {
    // 將新變體加入 ProductVariant
    this.product.productVariants.push({ ...this.newVariant });
    // 清空新變體的表單
    this.newVariant = { productVariantId: 0, color: '', stock: 0, size: '', price: 0 };
  }

  removeVariant(index: number) {
    this.product.productVariants.splice(index, 1);
  }

  submitProduct() {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Error: Token is null. User might not be authenticated.');
      alert('Please log in before adding a product.');
      return;
    }
    // 使用 AddProductRequest 作為參數提交
    this.productService.addProduct(this.product).subscribe({
      next: (response) => {
        if (response.status) {
          console.log('Product added successfully:', response.data);
          alert('Product added successfully!');
          this.resetForm();
        } else {
          console.error('Failed to add product:', response.message);
          alert('Failed to add product: ' + response.message);
        }
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Error adding product');
      }
    });
  }

  resetForm() {
    // 重設表單
    this.product = {
      productId: 0,
      name: '',
      description: '',
      imageUrl: '',
      category: '',
      isList: true,
      fkVendorId: 1,
      productVariants: []
    };
  }
}
