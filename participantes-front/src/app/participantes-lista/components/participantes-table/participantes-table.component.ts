import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Participantes } from '../../model/participantes';

@Component({
  selector: 'app-participantes-table',
  templateUrl: './participantes-table.component.html',
  styleUrls: ['./participantes-table.component.scss']
})
export class ParticipantesTableComponent implements OnInit {

  @Input() participantes: Participantes[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['id', 'nome', 'cpf', 'telefone', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

}
