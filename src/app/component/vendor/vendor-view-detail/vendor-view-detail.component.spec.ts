import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorViewDetailComponent } from './vendor-view-detail.component';

describe('VendorViewDetailComponent', () => {
  let component: VendorViewDetailComponent;
  let fixture: ComponentFixture<VendorViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorViewDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
