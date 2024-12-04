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

@NgModule({
  declarations: [
    ProductsComponent,
    GuestPageComponent,
    NewFeatureTestComponent,
    GuestLoginDialogComponent,
    GuestRegisterDialogComponent,
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
  ]
})
export class GuestModule { }
