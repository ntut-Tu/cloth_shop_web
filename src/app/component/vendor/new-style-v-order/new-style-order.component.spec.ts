import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleOrderComponent } from './new-style-order.component';

describe('NewStyleOrderComponent', () => {
  let component: NewStyleOrderComponent;
  let fixture: ComponentFixture<NewStyleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStyleOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStyleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
