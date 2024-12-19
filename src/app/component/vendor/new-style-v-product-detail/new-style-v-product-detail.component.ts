import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../../service/business/product.service'; // 假設有 ProductService

@Component({
  selector: 'app-new-style-product-detail',
  templateUrl: './new-style-v-product-detail.component.html',
  styleUrls: ['./new-style-v-product-detail.component.css'],
})
export class NewStyleVProductDetailComponent {
  selectedVariant: any;
  stockToAdd: number = 0; // 預設增加庫存的數量為 0

  constructor(
    public dialogRef: MatDialogRef<NewStyleVProductDetailComponent>,
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
  }

  toggleActiveStatus(): void {
    if (this.selectedVariant) {
      const updatedStatus = !this.selectedVariant.isActive;
      this.productService.updateProductStatus(this.selectedVariant.productVariantId, updatedStatus).subscribe(
        () => {
          this.selectedVariant.isActive = updatedStatus;
          console.log('上下架狀態更新成功');
        },
        (error) => {
          console.error('上下架狀態更新失敗', error);
        }
      );
    }
  }

  updateStock(): void {
    if (this.selectedVariant && this.stockToAdd > 0) {
      const newStock = this.selectedVariant.stock + this.stockToAdd;
      this.productService.updateProductStock(this.selectedVariant.productVariantId, newStock).subscribe(
        () => {
          this.selectedVariant.stock = newStock;
          this.stockToAdd = 0; // 清空輸入框
          console.log('庫存更新成功');
        },
        (error) => {
          console.error('庫存更新失敗', error);
        }
      );
    }
  }
}
