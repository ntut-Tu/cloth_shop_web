export interface CouponSummaryModel {
  discount_type: 'ratio' | 'absolute' | 'gift';
  is_list: boolean;
  code: string;
  start_date: string;
  end_date: string;
  max_usage: number;
  discount_details: ShippingDiscountModel | SpecialDiscountModel | SeasonalDiscountModel;
}
export interface ShippingDiscountModel extends DiscountBaseModel {

}
export interface SpecialDiscountModel {
  buy_quantity: number;
  gift_quantity: number;
  buy_variant_id: number;
  gift_variant_id: number;
}
export interface SeasonalDiscountModel extends DiscountBaseModel {

}
export interface DiscountBaseModel {
  ratio ?: number;  // 百分比折扣
  amount ?: number; // 固定金額折扣
  minimum_spend : number;
}
