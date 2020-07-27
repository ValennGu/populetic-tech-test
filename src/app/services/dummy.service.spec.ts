import { TestBed } from '@angular/core/testing';

import { DummyService } from './dummy.service';
import { HttpClientModule } from '@angular/common/http';

describe('DummyService', () => {
  let service: DummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ]
    });
    service = TestBed.inject(DummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
