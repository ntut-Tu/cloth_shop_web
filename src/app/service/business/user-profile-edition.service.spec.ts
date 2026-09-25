import { TestBed } from '@angular/core/testing';

import { UserProfileEditionService } from './user-profile-edition.service';

describe('UserProfileEditionService', () => {
  let service: UserProfileEditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileEditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
