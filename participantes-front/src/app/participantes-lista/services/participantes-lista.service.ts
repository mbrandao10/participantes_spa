import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Participantes } from './../model/participantes';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesListaService {

  private readonly API = 'api/participantes';

  constructor(
    private httpClient: HttpClient
  ) { }

  lista() {
    return this.httpClient.get<Participantes[]>(this.API)
    .pipe(
      first(),
      //delay(5000), //para testar spinner de carregamento
      tap(participantes => console.log(participantes))
    );
  }
}
