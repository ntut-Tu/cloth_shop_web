import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {guestRoutes} from "./guest.routes";
import {SharedModule} from "../shared/shared.module";
import {MatCard, MatCardContent, MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {GuestPageComponent} from "./page/guest.page.component";
import {ProductsComponent} from "./products/products.component";
import {GuestViewDetailComponent} from "./guest-view-detail/guest-view-detail.component";
import { NewFeatureTestComponent } from './new-feature-test/new-feature-test.component';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {GuestLoginDialogComponent} from "./login.dialog/guest.login.dialog.component";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
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
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInput} from "@angular/material/input";

@NgModule({
  declarations: [
    ProductsComponent,
    GuestPageComponent,
    NewFeatureTestComponent,
    GuestLoginDialogComponent,
    GuestRegisterDialogComponent,
    // AddCouponTestComponent
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
    //------------
  ]
})
export class GuestModule { }
