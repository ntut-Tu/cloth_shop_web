import { Routes } from '@angular/router';
import { AdminPageComponent } from './page/admin.page.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import {UserLogComponent} from "./user-log/user-log.component";
import {AdminDiscountComponent} from "./admin-discount/admin-discount.component";
// import { TransactionRecordsComponent } from './transaction-records/transaction-records.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'user-management', component: UserManagementComponent },
      { path: 'product-management', component: ProductManagementComponent },
      // { path: 'transaction-records', component: TransactionRecordsComponent },
      { path: 'user-log', component: UserLogComponent },
      { path: 'discount', component: AdminDiscountComponent },
    ]
  }
];
