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
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {
  MatAccordion,
  MatExpansionPanel, MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

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
    MatFormField,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatInput,
    MatButton,
    MatLabel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription
  ]
})
export class VendorModule { }
