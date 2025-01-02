export interface UserProfileModel {
  id:number;
  username:string;
  email:string;
  role:string
  establishDate:number;
  isActive:boolean;
}

// 用戶資料
export interface UserProfileModel {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  profilePicUrl: string;
}

// 可更動用戶資料
export interface UserInfoUpdateDto {
  email: string;
  phoneNumber: string;
  password: string;
  profilePicUrl: string;
}

//
// Integer id;
// String username;
// String email;
// String role;
// String establishDate;
// Boolean isActive;
