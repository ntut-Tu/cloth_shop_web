import {UserRoleModel} from "./user-role.model";

export interface RegisterRequestModel {
  username: string;
  email: string;
  password: string;
  role: UserRoleModel;

  storeAddress?: string;
  storeDescription?: string;
  storeLogoUrl?: string;
  paymentAccount?: string;

  defaultShippingAddress?: string;
  billingAddress?: string;
}
