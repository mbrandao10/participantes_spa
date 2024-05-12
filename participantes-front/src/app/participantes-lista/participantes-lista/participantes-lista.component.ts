import { Component, OnInit } from '@angular/core';

import { Participantes } from '../model/participantes';

@Component({
  selector: 'app-participantes-lista',
  templateUrl: './participantes-lista.component.html',
  styleUrls: ['./participantes-lista.component.scss']
})
export class ParticipantesListaComponent implements OnInit {

  participantes_lista: Participantes[] = [
    { _id: '1', nome: 'matheus', cpf: '123456643', telefone: '12123423453', sexo: 'M' },
    { _id: '1', nome: 'matheus', cpf: '123456643', telefone: '12123423453', sexo: 'M' },
    { _id: '1', nome: 'matheus', cpf: '123456643', telefone: '12123423453', sexo: 'M' },
    { _id: '1', nome: 'matheus', cpf: '123456643', telefone: '12123423453', sexo: 'M' },
    { _id: '1', nome: 'matheus', cpf: '123456643', telefone: '12123423453', sexo: 'M' },
    { _id: '1', nome: 'matheus', cpf: '123456643', telefone: '12123423453', sexo: 'M' }
  ];
  displayedColumns = ['nome', 'cpf', 'telefone', 'sexo']

  constructor() { }

  ngOnInit(): void {
  }

}
