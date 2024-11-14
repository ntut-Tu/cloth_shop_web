import { TestBed } from '@angular/core/testing';

import { CheckoutMapperService } from './checkout-mapper.service';

describe('CheckoutMapperService', () => {
  let service: CheckoutMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
