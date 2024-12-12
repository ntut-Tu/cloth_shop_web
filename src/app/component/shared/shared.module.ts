// shared/shared.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatDialogClose, MatDialogContainer} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    // ProductListComponent,
    // ProductCardComponent,
    // VendorViewDetailComponent,
    // GuestViewDetailComponent,
  ],
  imports: [
    CommonModule, MatDialogContainer, MatIconModule, MatDialogClose, MatCardModule, MatInputModule, MatSelectModule],
  exports: [
    // VendorViewDetailComponent,
    // ProductListComponent,
    FormsModule
  ]
})
export class SharedModule {}
