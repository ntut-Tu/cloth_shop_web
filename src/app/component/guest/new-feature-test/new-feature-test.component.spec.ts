import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureTestComponent } from './new-feature-test.component';

describe('NewFeatureTestComponent', () => {
  let component: NewFeatureTestComponent;
  let fixture: ComponentFixture<NewFeatureTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFeatureTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeatureTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
