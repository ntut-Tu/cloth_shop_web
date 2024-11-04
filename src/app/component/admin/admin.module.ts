import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';

import { AdminPageComponent } from './page/admin.page.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { TransactionRecordsComponent } from './transaction-records/transaction-records.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AdminPageComponent,
    UserManagementComponent,
    ProductManagementComponent,
    TransactionRecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    SharedModule,
    // 使用 `forChild` 注册子路由
  ]
})
export class AdminModule { }
