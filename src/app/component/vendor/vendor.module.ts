// vendor.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {vendorRoutes} from './vendor.routes';

import {VendorPageComponent} from './page/vendor.page.component';
import {SalesReportComponent} from './sales-report/sales-report.component';
import {DiscountComponent} from './discount/discount.component';
import {SharedModule} from "../shared/shared.module";
import {ProductFormComponent} from './product-form/product-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage, MatCardModule,
  MatCardTitle
} from "@angular/material/card";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatInput} from "@angular/material/input";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {NewStyleDiscountComponent} from './new-style-discount/new-style-discount.component';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
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
import {AddCouponComponent} from './add-coupon/add-coupon.component';
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {
  MAT_DATEPICKER_SCROLL_STRATEGY,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {Overlay, ScrollStrategyOptions} from "@angular/cdk/overlay";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NewStyleVProduct} from "./new-style-v-product/new-style-v-product";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { NewStyleVProductDetailComponent } from './new-style-v-product-detail/new-style-v-product-detail.component';
import {NewStyleVendorOrderComponent} from "./new-style-vendor-order/new-style-vendor-order.component";
import { VendorLedgerComponent } from './vendor-ledger/vendor-ledger.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MatPaginator} from "@angular/material/paginator";

@NgModule({
  declarations: [
    VendorPageComponent,
    // ProductManagementComponent,
    SalesReportComponent,
    DiscountComponent,
    ProductFormComponent,
    NewStyleDiscountComponent,
    AddCouponComponent,
    NewStyleVProduct,
    NewStyleVProductDetailComponent,
    NewStyleVendorOrderComponent,
    VendorLedgerComponent
    // EditCouponComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(vendorRoutes),
        SharedModule,
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

    ],
  providers:[
    MatDatepickerModule,
    {
      provide: MAT_DATEPICKER_SCROLL_STRATEGY,
      deps: [Overlay, ScrollStrategyOptions],
      useFactory: (overlay: Overlay, options: ScrollStrategyOptions) => {
        return () => options.reposition();
      },
    },
  ]
})
export class VendorModule { }
