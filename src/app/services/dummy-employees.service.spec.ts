import { TestBed } from '@angular/core/testing';

import { DummyEmployeesService } from './dummy-employees.service';

describe('DummyEmployeesService', () => {
  let service: DummyEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
