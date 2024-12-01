import { Component } from '@angular/core';
import {AddProductRequest, ProductDetail, ProductVariant} from "../../../model/product-summary.model";
import {ProductService} from "../../../service/business/product.service";
import {AuthService} from "../../../service/business/auth.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  // 使用 AddProductRequest 作為 product 的資料結構
  product: AddProductRequest = {
    name: '',
    description: '',
    imageUrl: '',
    category: '',
    isList: true,
    productVariants: [] // 初始為空的變體列表
  };

  newVariant: ProductVariant = {
    productVariantId: 0,
    color: '',
    stock: 0,
    size: '',
    price: 0
  };

  selectedFile: File | null = null;

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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitProduct() {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Error: Token is null. User might not be authenticated.');
      alert('Please log in before adding a product.');
      return;
    }

    if (this.selectedFile) {
      this.productService.uploadProductImage(this.selectedFile).subscribe({
        next: (response) => {
          if (response.status) {
            this.product.imageUrl = environment.baseUrl + response.data;
            this.createProduct();
          } else {
            console.error('Failed to upload image:', response.message);
            alert('Failed to upload image: ' + response.message);
          }
        },
        error: (error) => {
          console.error('Error:', error);
          alert('Error uploading image');
        }
      });
    } else {
      this.createProduct();
    }
  }

  createProduct() {
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
    // 重设表单
    this.product = {
      name: '',
      description: '',
      imageUrl: '',
      category: '',
      isList: true,
      productVariants: []
    };
    this.selectedFile = null;
  }
}
