import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewDetailComponent } from './customer-view-detail.component';

describe('CustomerViewDetailComponent', () => {
  let component: CustomerViewDetailComponent;
  let fixture: ComponentFixture<CustomerViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerViewDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
