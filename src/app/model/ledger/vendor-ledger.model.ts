export interface VendorLedger{
  ledgerEntryId: number;
  ledgerType: string;
  transactionType: string;
  amount: number;
  totalBalance: number;
  transactionDate: string;
  notes: string;
  couponId: number;
  vendorId: number;
  storeOrderId: number;
}
