import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisterPageComponent } from './home.register.page.component';

describe('HomepageRegisterPageComponent', () => {
  let component: HomeRegisterPageComponent;
  let fixture: ComponentFixture<HomeRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeRegisterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
