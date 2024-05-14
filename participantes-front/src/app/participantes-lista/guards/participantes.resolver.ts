import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Participantes } from '../model/participantes';
import { ParticipantesListaService } from '../services/participantes-lista.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesResolver implements Resolve<Participantes> {

  constructor(private service: ParticipantesListaService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Participantes> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', nome: '', cpf: '',  telefone: '', sexo: '', civil: '', observacao: ''});
  }
}
