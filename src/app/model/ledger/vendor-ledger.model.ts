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

// public class VendorLedgerResponseDTO {
//   private Integer
//   ledgerEntryId;
//   private String
//   ledgerType;
//   private String
//   transactionType;
//   private BigDecimal
//   amount;
//   private BigDecimal
//   totalBalance;
//   private String
//   transactionDate;
//   private String
//   notes;
//   private Integer
//   couponId;
//   private Integer
//   vendorId;
//   private Integer
//   storeOrderId;
// }
