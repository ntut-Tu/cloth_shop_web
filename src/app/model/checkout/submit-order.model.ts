import {
  CheckoutBaseOrderModel,
} from "./shared-checkout.model";

export interface SubmitOrderModel extends CheckoutBaseOrderModel{
  order_id: string;
  payment_method: string,
  credit_card_last_four : string,
  delivery_type : string,
  pickup_store : string,
  shipping_address : string,
}

export interface SubmitOrderResponseModel {
  order_id: number;
  status: string;
  total_amount: number;
  discount_amount: number;
  net_amount: number;
  estimated_delivery_date: string;
}

// =================================Template=================================

export const mapSubmitOrderResponse = (data: any): SubmitOrderResponseModel => ({
  order_id: data.orderId,
  status: data.status,
  total_amount: data.totalAmount,
  discount_amount: data.discountAmount,
  net_amount: data.finalAmount,
  estimated_delivery_date: data.estimatedDeliveryDate,
});
