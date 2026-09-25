export interface PlatformLedger{
  ledgerEntryId: number;
  ledgerType: string;
  transactionType: string;
  amount: number;
  totalBalance: number;
  transactionDate: string;
  notes: string;
  couponId: number;
  orderId: number;
}

