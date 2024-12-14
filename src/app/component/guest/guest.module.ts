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
import {NewStyleGProductComponent} from "./new-style-g-product/new-style-g-product.component";
import {NewFeatureTestComponent} from './new-feature-test/new-feature-test.component';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {GuestLoginDialogComponent} from "./login.dialog/guest.login.dialog.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {GuestRegisterDialogComponent} from "./register.dialog/guest.register.dialog.component";
import {GuestViewDetailComponent} from "./new-style-g-view-detail/guest-view-detail.component";
import {MockNewStyleOrderComponent} from "./mock-new-style-order/mock-new-style-order.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatBottomSheetContainer} from "@angular/material/bottom-sheet";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {ReviewComponent} from "./review/review.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";

@NgModule({
  declarations: [
    NewStyleGProductComponent,
    GuestPageComponent,
    NewFeatureTestComponent,
    GuestLoginDialogComponent,
    GuestRegisterDialogComponent,
    GuestViewDetailComponent,
    MockNewStyleOrderComponent,
    // AddCouponTestComponent
    // CartComponent,
    ReviewComponent
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
        //------------
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
        MatInput
    ]
})
export class GuestModule { }
