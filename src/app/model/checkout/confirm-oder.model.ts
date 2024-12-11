import {DiscountSummaryModel, mapDiscountSummary} from "../coupon/coupon.model";
import {CheckoutBaseOrderModel, CheckoutBaseProductVariantModel} from "./shared-checkout.model";

export interface ConfirmAmountModel extends CheckoutBaseOrderModel{
}

export interface ConfirmAmountResponseModel {
  total_amount: number;
  shipping_fee: number;
  discount_amount: number;
  final_amount: number;
  order_id: string;
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
  coupon ?: DiscountSummaryModel;
}

// =================================Template=================================
export const mapConfirmDiscountResponse = (dto: any): ConfirmDiscountResponseModel => ({
  is_valid: dto.isValid,
  discount_type: dto.discountType,
  reason: dto.reason,
  coupon: dto.coupon ? mapDiscountSummary(dto.coupon) : undefined,
});

export const mapConfirmAmountResponse = (dto: any): ConfirmAmountResponseModel => ({
  total_amount: dto.totalAmount,
  shipping_fee: dto.shippingFee,
  discount_amount: dto.discountAmount,
  final_amount: dto.finalAmount,
  order_id: dto.order_id, // 假設 order_id 是字符串，這裡進行數字轉換
});

