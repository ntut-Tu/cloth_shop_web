import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewDetailComponent } from './guest-view-detail.component';

describe('CustomerViewDetailComponent', () => {
  let component: GuestViewDetailComponent;
  let fixture: ComponentFixture<GuestViewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestViewDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
