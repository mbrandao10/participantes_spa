import { Component, Input, OnInit } from '@angular/core';
import { Participantes } from '../model/participantes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-participantes-table',
  templateUrl: './participantes-table.component.html',
  styleUrls: ['./participantes-table.component.scss']
})
export class ParticipantesTableComponent implements OnInit {

  @Input() participantes: Participantes[] = [];

  readonly displayedColumns = ['id', 'nome', 'cpf', 'telefone', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
