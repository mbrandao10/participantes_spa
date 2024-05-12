import { TestBed } from '@angular/core/testing';

import { ParticipantesListaService } from './participantes-lista.service';

describe('ParticipantesListaService', () => {
  let service: ParticipantesListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantesListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
