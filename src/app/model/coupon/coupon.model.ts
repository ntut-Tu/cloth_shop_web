export interface DiscountSummaryModel {
  discountId: number; // 唯一标识符
  discountType: 'Seasonal_Discount' | 'Shipping_Discount' | 'Special_Discount'; // 优惠类型
  code: string; // 优惠代码
  startDate: string; // 开始日期
  endDate: string; // 结束日期
  isActive: boolean; // 当前优惠是否生效
}

export interface DiscountDetailModel {
  couponId: number; // 优惠券 ID
  code: string; // 优惠代码
  type: string; // 优惠类型
  startDate: string; // 开始日期
  endDate: string; // 结束日期
  isList: boolean; // 是否列出
  maximumUsagePerCustomer: number; // 每位顾客的最大使用次数
  discount: StandardDiscountModel | SpecialDiscountModel; // 优惠详情
}

export interface BaseDiscountModel {
}

export interface SpecialDiscountModel extends BaseDiscountModel {
  buyQuantity: number; // 购买数量
  giftQuantity: number; // 赠送数量
  buyVariantId: number; // 购买的变体 ID
  giftVariantId: number; // 赠送的变体 ID
}
export interface StandardDiscountModel extends BaseDiscountModel {
  discount_type: string; // 折扣类型
  ratio?: number; // 百分比折扣
  discount_amount?: number; // 固定金额折扣
  minimum_spend?: number; // 最低消费金额
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
