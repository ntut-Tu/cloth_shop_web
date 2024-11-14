import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalTimeService {
  getDateWithNumberForm():number{
    let date = new Date();
    return Number(`${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`);
  }
}
