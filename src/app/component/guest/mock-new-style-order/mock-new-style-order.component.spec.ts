import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockNewStyleOrderComponent } from './mock-new-style-order.component';

describe('NewStyleOrderComponent', () => {
  let component: MockNewStyleOrderComponent;
  let fixture: ComponentFixture<MockNewStyleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockNewStyleOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockNewStyleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
