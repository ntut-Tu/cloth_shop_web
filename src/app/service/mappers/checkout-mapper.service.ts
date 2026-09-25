import { Injectable } from '@angular/core';
import {CartItem} from "../../model/product/product-summary.model";
import {CheckoutBaseStoreOrderModel} from "../../model/checkout/shared-checkout.model";
import {SubmitOrderModel} from "../../model/checkout/submit-order.model";
import {ConfirmAmountModel} from "../../model/checkout/confirm-oder.model";


@Injectable({
  providedIn: 'root'
})
export class CheckoutMapperService {
  /**
   * 將購物車項目轉換為商店訂單模型
   * @param items 購物車中的商品項目
   * @returns 按商店分組的商品訂單模型
   */
  mapCartItemsToStoreOrders(items: CartItem[]): CheckoutBaseStoreOrderModel[] {
    const grouped = items.reduce((acc: { [key: number]: CheckoutBaseStoreOrderModel }, item: CartItem) => {
      const storeId = item.fkVendorId;
      if (!acc[storeId]) {
        acc[storeId] = {
          store_id: storeId,
          special_discount_code: '',
          seasonal_discount_code: '',
          product_variants: [],
          store_name: '',
        };
      }
      acc[storeId].product_variants.push({
        product_variant_id: item.productVariantId,
        quantity: item.quantity
      });
      return acc;
    }, {});
    return Object.values(grouped);
  }

  mapConfirmAmountModelToSubmitOrderModel(confirmAmountModel: ConfirmAmountModel|null): SubmitOrderModel {
    if (!confirmAmountModel) {
      throw new Error('ConfirmAmountModel is required');
    }
    return {
      ...confirmAmountModel,
      order_id:'',
      payment_method: '',
      credit_card_last_four: '',
      delivery_type: '',
      pickup_store: '',
      shipping_address: '',
    };
  }
}
