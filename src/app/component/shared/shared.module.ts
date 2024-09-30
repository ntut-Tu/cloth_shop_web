// shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {VendorViewDetailComponent} from "../vendor/vendor-view-detail/vendor-view-detail.component";
import {CustomerViewDetailComponent} from "../customer/customer-view-detail/customer-view-detail.component";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    VendorViewDetailComponent,
    CustomerViewDetailComponent,
  ],
  imports: [CommonModule],
  exports: [
    VendorViewDetailComponent,
    CustomerViewDetailComponent,
    ProductListComponent
  ]
})
export class SharedModule {}
