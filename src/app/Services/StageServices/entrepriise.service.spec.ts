import { TestBed } from '@angular/core/testing';

import { EntrepriiseService } from './entrepriise.service';

describe('EntrepriiseService', () => {
  let service: EntrepriiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrepriiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
