import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCouponComponent } from './admin-add-coupon.component';

describe('AddCouponComponent', () => {
  let component: AdminAddCouponComponent;
  let fixture: ComponentFixture<AdminAddCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddCouponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
