import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Participantes } from '../model/participantes';
import { ParticipantesListaService } from '../services/participantes-lista.service';

@Component({
  selector: 'app-participantes-lista',
  templateUrl: './participantes-lista.component.html',
  styleUrls: ['./participantes-lista.component.scss']
})
export class ParticipantesListaComponent implements OnInit {

  participantes_lista$: Observable<Participantes[]>;
  displayedColumns = ['nome', 'cpf', 'telefone', 'sexo']

  constructor(
    private participantesListaService: ParticipantesListaService
  ) {
    this.participantes_lista$ = this.participantesListaService.lista();
   }

  ngOnInit(): void {}

}
