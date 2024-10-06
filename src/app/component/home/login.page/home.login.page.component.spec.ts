import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoginPageComponent } from './home.login.page.component';

describe('HomepageLoginPageComponent', () => {
  let component: HomeLoginPageComponent;
  let fixture: ComponentFixture<HomeLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
