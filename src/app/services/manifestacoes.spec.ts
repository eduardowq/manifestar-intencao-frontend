import { TestBed } from '@angular/core/testing';

import { Manifestacoes } from './manifestacoes';

describe('Manifestacoes', () => {
  let service: Manifestacoes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Manifestacoes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
