import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleDiscountComponent } from './new-style-discount.component';

describe('NewStyleDiscountComponent', () => {
  let component: NewStyleDiscountComponent;
  let fixture: ComponentFixture<NewStyleDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStyleDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStyleDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
