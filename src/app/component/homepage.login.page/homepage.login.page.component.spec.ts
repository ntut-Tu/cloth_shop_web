import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLoginPageComponent } from './homepage.login.page.component';

describe('HomepageLoginPageComponent', () => {
  let component: HomepageLoginPageComponent;
  let fixture: ComponentFixture<HomepageLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageLoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
