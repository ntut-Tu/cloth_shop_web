import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../../service/business/product.service'; // 假設有 ProductService

@Component({
  selector: 'app-new-style-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css'],
})
export class AdminProductDetailComponent {
  selectedVariant: any;
  selectedVariantStatus: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<AdminProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService // 注入服務
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  onVariantChange(event: any): void {
    const selectedVariantId = event.value;
    this.selectedVariant = this.data.productVariants.find(
      (variant: any) => variant.productVariantId == selectedVariantId
    );
    this.selectedVariantStatus = this.selectedVariant.isActive
  }

  submitStatusChange(): void {
    if (this.selectedVariant) {
      const updatedStatus = this.selectedVariantStatus;
      this.productService.updateProductStatus(this.selectedVariant.productVariantId, updatedStatus).subscribe(
        () => {
          this.selectedVariant.isActive = updatedStatus;
          console.log('上下架狀態更新成功');
          this.dialogRef.close("success");
        },
        (error) => {
          console.error('上下架狀態更新失敗', error);
        }
      );
    }
  }
}
