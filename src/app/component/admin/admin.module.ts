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
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {
  MatCard,
  MatCardContent, MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardTitle
} from "@angular/material/card";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatIcon, MatIconModule} from "@angular/material/icon";
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
  MatTable, MatTableModule
} from "@angular/material/table";
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {MatSort, MatSortModule} from "@angular/material/sort";
import { UserLogComponent } from './user-log/user-log.component';
import {AdminDiscountComponent} from "./admin-discount/admin-discount.component";
import {AdminAddCouponComponent} from "./admin-add-coupon/admin-add-coupon.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {AdminEditCouponComponent} from "./admin-edit-coupon/admin-edit-coupon.component";
import {AdminOrderComponent} from "./admin-order/admin-order.component";

@NgModule({
  declarations: [
    AdminPageComponent,
    UserManagementComponent,
    ProductManagementComponent,
    UserLogComponent,
    AdminDiscountComponent,
    AdminAddCouponComponent,
    AdminEditCouponComponent,
    AdminOrderComponent
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
    MatPaginator,
    MatSort,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatDialogModule,
    MatDialogActions,
    MatDialogModule,
    MatFormField,
    MatLabel,
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
    MatExpansionPanelDescription,
    MatGridList,
    MatGridTile,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRowDef,
    MatHeaderRowDef,
    MatRow,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatSlideToggle,
    MatError,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    MatHint,
    MatRadioGroup,
    MatRadioButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSuffix,
    MatDrawerContainer,
    MatList,
    MatListItem,
    MatCardImage,
    MatCardHeader,
    MatCardFooter,
    MatDrawer,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatGridList,
    MatGridTile,
    MatIconButton,
    MatButton,
    MatTable,
    MatTabGroup,
    MatTab,
    NgxChartsModule,
    MatPaginator,
  ]
})
export class AdminModule { }
