import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLedgerComponent } from './admin-ledger.component';

describe('AdminLedgerComponent', () => {
  let component: AdminLedgerComponent;
  let fixture: ComponentFixture<AdminLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLedgerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
