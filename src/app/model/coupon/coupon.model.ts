export interface DiscountSummaryModel {
  discountId: number;
  discountType: 'Seasonal_Discount' | 'Shipping_Discount' | 'Special_Discount';
  code: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface DiscountDetailModel {
  couponId: number;
  code: string;
  type: string;
  startDate: string;
  endDate: string;
  isList: boolean;
  maximumUsagePerCustomer: number;
  discount: StandardDiscountModel | SpecialDiscountModel;
}

export interface BaseDiscountModel {
}

export interface SpecialDiscountModel extends BaseDiscountModel {
  buyQuantity: number;
  giftQuantity: number;
  buyVariantId: number;
  giftVariantId: number;
}
export interface StandardDiscountModel extends BaseDiscountModel {
  discount_type: string;
  ratio?: number;
  discount_amount?: number;
  minimum_spend?: number;
}
export const mapDiscountSummary = (dto: any): DiscountSummaryModel => ({
  discountId: dto.discountId,
  discountType: dto.discountType,
  code: dto.code,
  startDate: dto.startDate,
  endDate: dto.endDate,
  isActive: dto.isActive,
});

export const mapDiscountDetails = (dto: any): DiscountDetailModel => ({
  couponId: dto.couponId,
  code: dto.code,
  type: dto.type,
  startDate: dto.startDate,
  endDate: dto.endDate,
  isList: dto.isList,
  maximumUsagePerCustomer: dto.maximumUsagePerCustomer,
  discount: mapDiscount(dto.discount, dto.type),
});

export const mapDiscount = (dto: any, type: string): StandardDiscountModel | SpecialDiscountModel => {
  if (type === 'Special_Discount') {
    return {
      ...dto,
      buyQuantity: dto.buyQuantity,
      giftQuantity: dto.giftQuantity,
      buyVariantId: dto.buyVariantId,
      giftVariantId: dto.giftVariantId,
    } as SpecialDiscountModel;
  }
  return {
    code: dto.code,
    discount_type: dto.discountType,
    // startDate: dto.startDate,
    // endDate: dto.endDate,
    ratio: dto.ratio,
    discount_amount: dto.amount,
    minimumSpend: dto.minimumSpend,
  } as StandardDiscountModel;
};
