// shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {VendorViewDetailComponent} from "../vendor/vendor-view-detail/vendor-view-detail.component";
import {CustomerViewDetailComponent} from "../customer/customer-view-detail/customer-view-detail.component";
import {FormsModule} from "@angular/forms";
import {MatDialogClose, MatDialogContainer} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {GuestViewDetailComponent} from "../guest/guest-view-detail/guest-view-detail.component";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    VendorViewDetailComponent,
    CustomerViewDetailComponent,
    GuestViewDetailComponent,
  ],
  imports: [CommonModule, MatDialogContainer, MatIconModule, MatDialogClose, MatCardModule, MatInputModule, MatSelectModule],
  exports: [
    VendorViewDetailComponent,
    CustomerViewDetailComponent,
    ProductListComponent,
    FormsModule
  ]
})
export class SharedModule {}
