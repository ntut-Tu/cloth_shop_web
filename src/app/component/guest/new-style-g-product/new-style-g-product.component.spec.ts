import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleGProductComponent } from './new-style-g-product.component';

describe('ProductsComponent', () => {
  let component: NewStyleGProductComponent;
  let fixture: ComponentFixture<NewStyleGProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStyleGProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStyleGProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
