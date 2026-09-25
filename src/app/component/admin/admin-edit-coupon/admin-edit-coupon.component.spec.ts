import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditCouponComponent } from './admin-edit-coupon.component';

describe('EditCouponComponent', () => {
  let component: AdminEditCouponComponent;
  let fixture: ComponentFixture<AdminEditCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditCouponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
