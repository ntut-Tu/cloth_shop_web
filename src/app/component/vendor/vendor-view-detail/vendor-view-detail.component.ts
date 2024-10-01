// vendor-view-detail.component.ts
import { Component, Input } from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-vendor-view-detail',
  templateUrl: './vendor-view-detail.component.html',
  styleUrls: ['./vendor-view-detail.component.css']
})
export class VendorViewDetailComponent {
  @Input() product!: Product;

  editProduct() {
    console.log('编辑产品:', this.product);
    // 編輯商品邏輯
  }

  deleteProduct() {
    console.log('删除产品:', this.product);
    // 刪除(下架，刪除應為禁止)商品邏輯
  }
}
