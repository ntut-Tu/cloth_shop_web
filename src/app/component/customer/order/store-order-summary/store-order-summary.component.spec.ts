import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderSummaryComponent } from './store-order-summary.component';

describe('StoreOrderSummaryComponent', () => {
  let component: StoreOrderSummaryComponent;
  let fixture: ComponentFixture<StoreOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreOrderSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
