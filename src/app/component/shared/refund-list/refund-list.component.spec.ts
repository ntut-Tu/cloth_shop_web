import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundListComponent } from './refund-list.component';

describe('RefundListComponent', () => {
  let component: RefundListComponent;
  let fixture: ComponentFixture<RefundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefundListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
