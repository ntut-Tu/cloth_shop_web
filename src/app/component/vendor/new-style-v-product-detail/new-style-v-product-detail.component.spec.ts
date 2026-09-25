import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleVProductDetailComponent } from './new-style-v-product-detail.component';

describe('NewStyleProductDetailComponent', () => {
  let component: NewStyleVProductDetailComponent;
  let fixture: ComponentFixture<NewStyleVProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStyleVProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStyleVProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
