import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/business/product.service';
import { ProductSummaryModel } from '../../../model/product/product-summary.model';
import {fakeData} from "../fakeData";


interface ProductVariant {
  productVariantId: number;
  color: string;
  size: string;
  price: number;
}

interface ProductSummaryModelWithVariants extends ProductSummaryModel {
  productVariants: ProductVariant[];
}

@Component({
  selector: 'app-new-feature-test',
  templateUrl: './new-feature-test.component.html',
  styleUrls: ['./new-feature-test.component.css']
})

export class NewFeatureTestComponent implements OnInit {
  // products: ProductSummaryModel[] = [];
  userType: string = 'guest';
  detailedProduct: any = null;
  selectedVariant: any = null;
  categories: string[] = ['全部', '衣服', '褲子', '配件', '其他'];
  selectedCategory: string = '全部';
  selectedSortOption: string = '日期';
  sortOptions: { value: string, viewValue: string }[] = [
    { value: 'sold', viewValue: '熱度' },
    { value: 'rate', viewValue: '評分' },
    { value: 'date', viewValue: '日期' }
  ];
  products: ProductSummaryModelWithVariants[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Generate fake products for testing
    this.products = fakeData;
  }

  onLoadDetail(product: ProductSummaryModel) {
    this.productService.getProductDetails(product.productId).subscribe(
      (response) => {
        this.detailedProduct = response.data;
      },
      (error) => {
        console.error('Error loading product details', error);
      }
    );
  }

  onVariantChange(event: Event) {
    const selectedVariantId = (event.target as HTMLSelectElement).value;
    this.selectedVariant = this.detailedProduct.productVariants.find(
      (variant: any) => variant.productVariantId === selectedVariantId
    );
  }

  addToCart() {
    // Add to cart logic here
  }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.products = fakeData;
    if (category !== '全部') {
      this.products = this.products.filter(product => product.category === category);
    }
  }

}
