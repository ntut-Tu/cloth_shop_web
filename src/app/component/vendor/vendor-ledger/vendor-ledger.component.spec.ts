import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLedgerComponent } from './vendor-ledger.component';

describe('VendorLedgerComponent', () => {
  let component: VendorLedgerComponent;
  let fixture: ComponentFixture<VendorLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorLedgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
