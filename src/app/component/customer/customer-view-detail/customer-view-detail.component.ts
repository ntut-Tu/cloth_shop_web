import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from '../../../service/business/cart.service';
import { CartItem, ProductDetail, ProductVariant } from "../../../model/product-summary.model";

@Component({
  selector: 'app-customer-view-detail',
  templateUrl: './customer-view-detail.component.html',
  styleUrls: ['./customer-view-detail.component.css']
})
export class CustomerViewDetailComponent implements OnInit, OnChanges {
  @Input() product!: ProductDetail;
  selectedVariant: ProductVariant | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initializeSelectedVariant();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.initializeSelectedVariant();
    }
  }

  initializeSelectedVariant(): void {
    // 確保product和productVariants已加載
    if (this.product && this.product.productVariants && this.product.productVariants.length > 0) {
      this.selectedVariant = this.product.productVariants[0];
    }
  }

  onVariantChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = selectElement.selectedIndex;
    this.selectedVariant = this.product.productVariants[selectedIndex];
  }

  addToCart(): void {
    if (!this.selectedVariant) {
      console.error("商品不可為空!");
      alert("商品不可為空，請選擇變體或檢查DB!");
      return;
    }

    const item: CartItem = {
      productVariantId: this.selectedVariant.productVariantId,
      name: this.product.name,
      imageUrl: this.product.imageUrl,
      color: this.selectedVariant.color,
      stock: this.selectedVariant.stock,
      size: this.selectedVariant.size,
      price: this.selectedVariant.price,
      quantity: 1,
      fkVendorId: this.product.fkVendorId,
      storeDescription: this.product.storeDescription
    };

    this.cartService.addToCart(item);
    console.log('加入购物车:', item);
    // alert("商品已加入购物车!");
  }
}
