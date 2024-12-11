import { TestBed } from '@angular/core/testing';

import { CouponApiService } from './coupon-api.service';

describe('CouponApiService', () => {
  let service: CouponApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
