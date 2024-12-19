// vendor.routes.ts
import { Routes } from '@angular/router';
import { VendorPageComponent } from './page/vendor.page.component';
// import { ProductManagementComponent } from './product-management/product-management.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import {ProductFormComponent} from "./product-form/product-form.component";
import {NewStyleDiscountComponent} from "./new-style-discount/new-style-discount.component";
import {NewStyleVProduct} from "./new-style-v-product/new-style-v-product";
import {NewStyleVendorOrderComponent} from "./new-style-vendor-order/new-style-vendor-order.component";
import {VendorLedgerComponent} from "./vendor-ledger/vendor-ledger.component";

export const vendorRoutes: Routes = [
  {
    path: '',
    component: VendorPageComponent,
    children: [
      { path: 'product-management', component: NewStyleVProduct },
      { path: 'sales-report', component: NewStyleVendorOrderComponent },
      { path: 'discount', component: NewStyleDiscountComponent },
      { path: 'product-form', component: ProductFormComponent },
      { path: 'ledger', component: VendorLedgerComponent }
    ]
  }
];
