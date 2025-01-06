export interface RefundModel{
    refund_id: number;
    order_item_id: number;
    request_target: string;
    status_type: string;
    is_closed: boolean;
    refund_reason: string;
    vendor_response: string;
    admin_response: string;
    created_at: string;
    updated_at: string;
    vendor_id: number;
    admin_id: number;
}

export interface RefundScopeDataModel{
  user_type: string;
  order_item_id: number;
}

export interface RefundListSumResponse{
  refund_id: number;
  order_item_id: number;
  item_name: string;
  refund_status: string;
  is_closed: boolean;
}
// private Integer order_item_id;
// private String request_target;
// private String status_type;
// private Boolean is_closed;
// private String refund_reason;
// private String vendor_response;
// private String admin_response;
// private String updated_at;

export function mapFormToRefundModel(formValue: any): RefundModel {
  return {
    refund_id: 0, // 新申請時，後端應生成此值
    order_item_id: Number(formValue.orderItemId),
    request_target: formValue.requestTarget,
    status_type: formValue.statusType,
    is_closed: formValue.isClosed === 'true' || formValue.isClosed === true,
    refund_reason: formValue.refundReason,
    vendor_response: formValue.vendorResponse || '',
    admin_response: formValue.adminResponse || '',
    created_at: '', // 此值應由後端自動生成
    updated_at: '', // 此值應由後端自動生成
    vendor_id: formValue.vendorId ? Number(formValue.vendorId) : 0,
    admin_id: formValue.adminId ? Number(formValue.adminId) : 0,
  };
}

export function mapRefundModelToForm(refundData: RefundModel): any {
  return {
    orderItemId: refundData.order_item_id,
    requestTarget: refundData.request_target,
    statusType: refundData.status_type,
    isClosed: refundData.is_closed,
    refundReason: refundData.refund_reason,
    vendorResponse: refundData.vendor_response,
    adminResponse: refundData.admin_response,
    vendorId: refundData.vendor_id,
    adminId: refundData.admin_id,
  };
}
