import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleVProduct } from './new-style-v-product';

describe('NewFeatureTestComponent', () => {
  let component: NewStyleVProduct;
  let fixture: ComponentFixture<NewStyleVProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStyleVProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStyleVProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
