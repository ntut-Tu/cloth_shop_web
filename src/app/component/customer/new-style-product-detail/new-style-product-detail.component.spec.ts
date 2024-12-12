import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleProductDetailComponent } from './new-style-product-detail.component';

describe('CustomerViewDetailComponent', () => {
  let component: NewStyleProductDetailComponent;
  let fixture: ComponentFixture<NewStyleProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStyleProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStyleProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
