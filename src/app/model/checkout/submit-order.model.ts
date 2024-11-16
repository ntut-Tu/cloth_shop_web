import {
  CheckoutBaseOrderModel,
} from "./shared-checkout.model";

export interface SubmitOrderModel extends CheckoutBaseOrderModel{
  payment_method: string,
  credit_card_last_four : string,
  delivery_type : string,
  pickup_store : string,
  shipping_address : string,
}
