import {Component, Input, OnInit, OnChanges, SimpleChanges, Inject} from '@angular/core';
import { CartService } from '../../../service/business/cart.service';
import { CartItem, ProductDetail, ProductVariant } from "../../../model/product/product-summary.model";
import {environment} from "../../../../environments/environment";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {onImageError} from "../../../utils/image-utils.service";

@Component({
  selector: 'app-customer-view-detail',
  templateUrl: './new-style-product-detail.component.html',
  styleUrls: ['./new-style-product-detail.component.css']
})
export class NewStyleProductDetailComponent{
  selectedVariant: any;

  constructor(
    public dialogRef: MatDialogRef<NewStyleProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  onVariantChange(event: any): void {
    const selectedVariantId = event.value;
    this.selectedVariant = this.data.productVariants.find(
      (variant: any) => variant.productVariantId === selectedVariantId
    );
  }

  addToCart(): void {
    if (!this.selectedVariant) {
      alert("請選擇商品款式！");
      return;
    }

    const cartItem = {
      productVariantId: this.selectedVariant.productVariantId,
      name: this.data.name,
      imageUrl: this.data.imageUrl,
      color: this.selectedVariant.color,
      stock: this.selectedVariant.stock,
      size: this.selectedVariant.size,
      price: this.selectedVariant.price,
      quantity: 1,
      fkVendorId: this.data.fkVendorId,
      storeDescription: this.data.storeDescription
    };

    this.cartService.addToCart(cartItem);
    alert('商品已加入購物車！');
    this.dialogRef.close('success');
  }

  protected readonly environment = environment;
  protected readonly onImageError = onImageError;
}
