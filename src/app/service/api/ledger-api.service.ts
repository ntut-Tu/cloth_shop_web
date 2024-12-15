import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponseDTO} from "../../model/api-response.model";
import {PlatformLedger} from "../../model/ledger/platform-ledger.model";
import {VendorLedger} from "../../model/ledger/vendor-ledger.model";

@Injectable({
  providedIn: 'root'
})
export class LedgerApiService{
  private apiUrl = environment.baseUrl + '/api/ledger';

  constructor(private http: HttpClient) {}

  getPlatformLedger(): Observable<ApiResponseDTO<PlatformLedger[]>> {
    return this.http.get<ApiResponseDTO<PlatformLedger[]>>(`${this.apiUrl}/platform`);
  }

  getVendorLedger(): Observable<ApiResponseDTO<VendorLedger[]>> {
    return this.http.get<ApiResponseDTO<VendorLedger[]>>(`${this.apiUrl}/vendor`);
  }
}
