import { TestBed } from '@angular/core/testing';

import { UserManageService } from './user-manage.service';

describe('UserListService', () => {
  let service: UserManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
