export interface CouponSummaryModel {
  discount_type: 'ratio' | 'absolute' | 'gift';
  is_list: boolean;
  code: string;
  start_date: string;
  end_date: string;
  max_usage: number;
  discount_details: ShippingDiscountModel | SpecialDiscountModel | SeasonalDiscountModel | null
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
// =================================Template=================================
export const mapDiscountDetails = (dto: any, discountType: string) => {
  if (discountType === 'shipping') {
    return {
      ratio: dto.ratio,
      amount: dto.amount,
      minimum_spend: dto.minimumSpend,
    } as ShippingDiscountModel;
  } else if (discountType === 'special') {
    return {
      buy_quantity: dto.buyQuantity,
      gift_quantity: dto.giftQuantity,
      buy_variant_id: dto.buyVariantId,
      gift_variant_id: dto.giftVariantId,
    } as SpecialDiscountModel;
  } else if (discountType === 'seasonal') {
    return {
      ratio: dto.ratio,
      amount: dto.amount,
      minimum_spend: dto.minimumSpend,
    } as SeasonalDiscountModel;
  }
  return null;
};

export const mapCouponSummary = (dto: any): CouponSummaryModel => ({
  discount_type: dto.discountType,
  is_list: dto.isList,
  code: dto.code,
  start_date: dto.startDate,
  end_date: dto.endDate,
  max_usage: dto.maxUsage,
  discount_details: mapDiscountDetails(dto.discountDetails, dto.discountType),
});
