import {CouponSummaryModel} from "../coupon/coupon.model";
import {CheckoutBaseOrderModel, CheckoutBaseProductVariantModel} from "./shared-checkout.model";

export interface ConfirmAmountModel extends CheckoutBaseOrderModel{
}

export interface ConfirmAmountResponseModel {
  total_amount: number;
  shipping_fee: number;
  discount_amount: number;
  final_amount: number;
}


export interface ConfirmDiscountModel {
  discount_code: string;
  type: 'order' | 'store_order'; // 明確類型，使用 union type
  store_id?: number; // 若 type 為 store_order 時才需包含
}

export interface ConfirmDiscountResponseModel{
  is_valid : boolean; // 過期 || type是否屬於discount_type可以用的 || 以下架 || 已超過用戶使用次數 || 是否屬於這個店家
  discount_type ?: string;  // 若可用則會顯示是哪種優惠
  reason ?: string; //拒絕原因
  coupon ?: CouponSummaryModel;
}
