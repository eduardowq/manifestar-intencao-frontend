import { TestBed } from '@angular/core/testing';

import { Nucleos } from './nucleos';

describe('Nucleos', () => {
  let service: Nucleos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nucleos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
