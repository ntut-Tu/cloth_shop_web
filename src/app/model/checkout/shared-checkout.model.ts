// 基礎訂單接口
export interface CheckoutBaseOrderModel {
  order_date?: string;
  shipping_discount_code?: string;
  store_orders: CheckoutBaseStoreOrderModel[];
}

// 基礎商店訂單接口
export interface CheckoutBaseStoreOrderModel {
  store_id: number;
  special_discount_code?: string;
  seasonal_discount_code?: string;
  product_variants: CheckoutBaseProductVariantModel[];
}

// 基礎商品變體接口
export interface CheckoutBaseProductVariantModel {
  product_variant_id: number;
  quantity: number;
}
