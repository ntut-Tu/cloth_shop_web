import { TestBed } from '@angular/core/testing';

import { UserProfileEditionApiService } from './user-profile-edition-api.service';

describe('UserProfileEditionApiService', () => {
  let service: UserProfileEditionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileEditionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
