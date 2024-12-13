import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTestComponent } from './reviewTest.component';

describe('ReviewComponent', () => {
  let component: ReviewTestComponent;
  let fixture: ComponentFixture<ReviewTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
