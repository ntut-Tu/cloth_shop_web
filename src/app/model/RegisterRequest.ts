import {UserRole} from "./user.role";

export interface RegisterRequest {
  account: string;
  email: string;
  password: string;
  role: UserRole;

  storeAddress?: string;
  storeDescription?: string;
  storeLogoUrl?: string;
  paymentAccount?: string;

  defaultShippingAddress?: string;
  billingAddress?: string;
}
