import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfileEditionService } from "../../../service/business/user-profile-edition.service";


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm !: FormGroup;
  selectedImage: File | null = null;
  profilePicUrl!: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userProfileService: UserProfileEditionService
  ) {}

  ngOnInit(): void {
    // 初始化表單
    this.profilePicUrl = this.data.portraitUrl;
    this.editProfileForm = this.fb.group({
      email: [this.data.email, [Validators.required, Validators.email]],
      password: ['', Validators.required], // 密碼保持空白，由使用者輸入新密碼
      phoneNumber: [this.data.phoneNumber, [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.selectedImage = event.target.files[0];
      // 預覽上傳的頭像
      if (this.selectedImage) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.profilePicUrl = e.target.result;
        };
        reader.readAsDataURL(this.selectedImage);
      }
    }
  }

  onSave(): void {
    if (this.editProfileForm.valid) {
      if (this.selectedImage) {
        // 上傳圖片並更新資料
        this.userProfileService.uploadUserPortrait(this.selectedImage).subscribe(response => {
          this.updateProfile(response.data);
        });
      } else {
        // 直接更新資料
        this.updateProfile(this.profilePicUrl);
      }
    }
  }

  updateProfile(profilePicUrl: string): void {
    const updateData = {
      email: this.editProfileForm.get('email')?.value,
      phoneNumber: this.editProfileForm.get('phoneNumber')?.value,
      password: this.editProfileForm.get('password')?.value,
      profilePicUrl: profilePicUrl  // 更新屬性名與後端一致
    };
    this.userProfileService.updateUserInfo(updateData).subscribe(() => {
      this.dialogRef.close(updateData);
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
