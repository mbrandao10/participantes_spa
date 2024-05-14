import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

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

  loadById(id: string) {
    return this.httpClient.get<Participantes>(`${this.API}/${id}`);
  }

  save(record:  Partial<Participantes>) {
    if (record._id){
      return this.update(record);
    }
    return this.create(record);

  }

  private create (record:  Partial<Participantes>){
    return this.httpClient.post<Participantes>(this.API, record).pipe(first());

  }

  private update (record:  Partial<Participantes>){
    return this.httpClient.put<Participantes>(`${this.API}/${record._id}`, record).pipe(first());
  }

}
