import {Component, Input, OnInit, OnChanges, SimpleChanges, Inject} from '@angular/core';
import { CartService } from '../../../service/business/cart.service';
import { CartItem, ProductDetail, ProductVariant } from "../../../model/product/product-summary.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {onImageError} from "../../../utils/image-utils.service";

@Component({
  selector: 'app-guest-view-detail',
  templateUrl: './guest-view-detail.component.html',
  styleUrls: ['./guest-view-detail.component.css']
})
export class GuestViewDetailComponent {
  selectedVariant: any;

  constructor(
    public dialogRef: MatDialogRef<GuestViewDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  onVariantChange(event: any): void {
    const selectedVariantId = event.value; // Material 的事件返回值
    this.selectedVariant = this.data.productVariants.find(
      (variant: any) => variant.productVariantId == selectedVariantId
    );
  }

  addToCart(): void {
    console.log('Add to cart:', this.selectedVariant);
    alert('請登入後再加入購物車！');
    this.dialogRef.close();
  }

  protected readonly onImageError = onImageError;
}
