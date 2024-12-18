import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {adminRoutes} from './admin.routes';

import {AdminPageComponent} from './page/admin.page.component';
import {UserManagementComponent} from './user-management/user-management.component';
// import { ProductManagementComponent } from './product-management/product-management.component';
// import { TransactionRecordsComponent } from './transaction-records/transaction-records.component';
import {SharedModule} from "../shared/shared.module";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatPaginator} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBottomSheetContainer} from "@angular/material/bottom-sheet";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AdminPageComponent,
    UserManagementComponent,
    ProductManagementComponent,
    // TransactionRecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatBottomSheetContainer,
    MatAccordion,
    MatExpansionPanelDescription,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatIconButton,
    MatButton,
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatColumnDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatExpansionPanelHeader,
    MatExpansionPanel,
    MatAccordion,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatBottomSheetContainer,
    MatGridList,
    MatGridTile,
    MatDialogModule,
    MatInput,
    MatPaginator
    // 使用 `forChild` 注册子路由
  ]
})
export class AdminModule { }
