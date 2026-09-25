import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleVendorOrderComponent } from './new-style-vendor-order.component';

describe('NewStyleOrderComponent', () => {
  let component: NewStyleVendorOrderComponent;
  let fixture: ComponentFixture<NewStyleVendorOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStyleVendorOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStyleVendorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
