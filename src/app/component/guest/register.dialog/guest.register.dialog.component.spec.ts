import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRegisterDialogComponent } from './guest.register.dialog.component';

describe('HomepageRegisterPageComponent', () => {
  let component: GuestRegisterDialogComponent;
  let fixture: ComponentFixture<GuestRegisterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestRegisterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
