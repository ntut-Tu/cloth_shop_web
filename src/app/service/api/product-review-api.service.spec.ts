import { TestBed } from '@angular/core/testing';

import { ProductReviewApiService } from './product-review-api.service';

describe('ProductReviewApiService', () => {
  let service: ProductReviewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductReviewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
