import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-style-product-detail',
  templateUrl: './new-style-v-product-detail.component.html',
  styleUrls: ['./new-style-v-product-detail.component.css'], // 修正屬性名稱
})
export class NewStyleVProductDetailComponent {
  selectedVariant: any;

  constructor(
    public dialogRef: MatDialogRef<NewStyleVProductDetailComponent>,
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
    this.dialogRef.close();
  }
}
