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
// public class PlatformLedgerResponseDTO {
//   private Integer ledgerEntryId;
//   private String ledgerType;
//   private String transactionType;
//   private BigDecimal amount;
//   private BigDecimal totalBalance;
//   private String transactionDate;
//   private String notes;
//   private Integer couponId;
//   private Integer orderId;
// }
