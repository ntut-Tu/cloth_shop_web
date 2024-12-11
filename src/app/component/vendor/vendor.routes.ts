// vendor.routes.ts
import { Routes } from '@angular/router';
import { VendorPageComponent } from './page/vendor.page.component';
// import { ProductManagementComponent } from './product-management/product-management.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { DiscountComponent } from './discount/discount.component';
import {ProductFormComponent} from "./product-form/product-form.component";
import {NewStyleDiscountComponent} from "./new-style-discount/new-style-discount.component";

export const vendorRoutes: Routes = [
  {
    path: '',
    component: VendorPageComponent,
    children: [
      // { path: 'product-management', component: ProductManagementComponent },
      { path: 'sales-report', component: SalesReportComponent },
      { path: 'discount', component: NewStyleDiscountComponent },
      { path: 'product-form', component: ProductFormComponent },
    ]
  }
];
