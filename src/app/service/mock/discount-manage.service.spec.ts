import { TestBed } from '@angular/core/testing';

import { DiscountManageService } from './discount-manage.service';

describe('DiscountManageService', () => {
  let service: DiscountManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
