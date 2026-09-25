import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductDetailComponent } from './admin-product-detail.component';

describe('NewStyleProductDetailComponent', () => {
  let component: AdminProductDetailComponent;
  let fixture: ComponentFixture<AdminProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
