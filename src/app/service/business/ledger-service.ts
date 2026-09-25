import {Injectable} from "@angular/core";
import {LedgerApiService} from "../api/ledger-api.service";

@Injectable({
  providedIn: 'root'
})
export class LedgerService{
  constructor(private ledgerApiService: LedgerApiService) {}

  getPlatformLedger() {
    return this.ledgerApiService.getPlatformLedger();
  }

  getVendorLedger(){
    return this.ledgerApiService.getVendorLedger();
  }
}
