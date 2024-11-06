// vendor.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { vendorRoutes } from './vendor.routes';

import { VendorPageComponent } from './page/vendor.page.component';
// import { ProductManagementComponent } from './product-management/product-management.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { DiscountComponent } from './discount/discount.component';
import {AppModule} from "../../app.module";
import {ProductListComponent} from "../shared/product-list/product-list.component";
import {SharedModule} from "../shared/shared.module";
import { VendorViewDetailComponent } from './vendor-view-detail/vendor-view-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    VendorPageComponent,
    // ProductManagementComponent,
    SalesReportComponent,
    DiscountComponent,
    ProductFormComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(vendorRoutes),
        SharedModule,
        FormsModule,
    ]
})
export class VendorModule { }
