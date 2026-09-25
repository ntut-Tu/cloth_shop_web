import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewComponent } from './customer-review.component';

describe('ReviewComponent', () => {
  let component: CustomerReviewComponent;
  let fixture: ComponentFixture<CustomerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
