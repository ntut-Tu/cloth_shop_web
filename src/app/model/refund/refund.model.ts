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

// private Integer order_item_id;
// private String request_target;
// private String status_type;
// private Boolean is_closed;
// private String refund_reason;
// private String vendor_response;
// private String admin_response;
// private String updated_at;
