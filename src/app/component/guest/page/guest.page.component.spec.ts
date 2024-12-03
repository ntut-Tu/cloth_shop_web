import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPageComponent } from './guest.page.component';

describe('GuestPageComponent', () => {
  let component: GuestPageComponent;
  let fixture: ComponentFixture<GuestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
