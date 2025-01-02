// shared/shared.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContainer,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatButton, MatIconButton} from "@angular/material/button";
import { RefundDialogComponent } from './refund-dialog/refund-dialog.component';


@NgModule({
  declarations: [
    // ProductListComponent,
    // ProductCardComponent,
    // VendorViewDetailComponent,
    // GuestViewDetailComponent,

    EditProfileComponent,
    RefundDialogComponent
  ],
  imports: [
    CommonModule, MatDialogContainer, MatIconModule, MatDialogClose, MatCardModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatDialogActions, MatButton, MatDialogContent, MatDialogTitle, MatIconButton],
  exports: [
    // VendorViewDetailComponent,
    // ProductListComponent,
    FormsModule
  ]
})
export class SharedModule {}
