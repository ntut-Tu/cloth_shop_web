import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Discount} from "../../model/discount.model";

@Injectable({
  providedIn: 'root'
})
export class DiscountManageService {

  getDiscountList() :Observable<Discount[]>{
    const mockDiscountList:Discount[]=[
      {
        id:1,
        code:'ABC',
        expiryDate:20241230
      },{
        id:2,
        code:'EFG',
        expiryDate:20240930
    }
    ]
    return of(mockDiscountList);
  }
}
