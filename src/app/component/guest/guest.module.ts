import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {guestRoutes} from "./guest.routes";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {GuestPageComponent} from "./page/guest.page.component";
import {ProductsComponent} from "./products/products.component";
import {GuestViewDetailComponent} from "./guest-view-detail/guest-view-detail.component";
import { NewFeatureTestComponent } from './new-feature-test/new-feature-test.component';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {GuestLoginDialogComponent} from "./login.dialog/guest.login.dialog.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {GuestRegisterDialogComponent} from "./register.dialog/guest.register.dialog.component";
import {NewStyleOrderComponent} from "../customer/new-style-order/new-style-order.component";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatBottomSheetContainer} from "@angular/material/bottom-sheet";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@NgModule({
  declarations: [
    ProductsComponent,
    GuestPageComponent,
    NewFeatureTestComponent,
    GuestLoginDialogComponent,
    GuestRegisterDialogComponent,
    NewStyleOrderComponent
    // CartComponent,
  ],
  providers:[
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(guestRoutes),
    SharedModule,
    FormsModule,
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
    MatAccordion,
    MatExpansionPanelDescription,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatIconButton,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatColumnDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
  ]
})
export class GuestModule { }
