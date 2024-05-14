import { TestBed } from '@angular/core/testing';

import { ParticipantesResolver } from './participantes.resolver';

describe('ParticipantesResolver', () => {
  let resolver: ParticipantesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ParticipantesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
