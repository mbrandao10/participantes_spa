import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Participantes } from '../model/participantes';
import { ParticipantesListaService } from '../services/participantes-lista.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-participantes-lista',
  templateUrl: './participantes-lista.component.html',
  styleUrls: ['./participantes-lista.component.scss']
})
export class ParticipantesListaComponent implements OnInit {

  participantes_lista$: Observable<Participantes[]>;
  displayedColumns = ['id', 'nome', 'cpf', 'telefone', 'actions']

  constructor(
    private participantesListaService: ParticipantesListaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.participantes_lista$ = this.participantesListaService.lista().pipe(
      catchError(error =>{
        this.onError('Erro ao carregar Lista de perticipantes.')
        return of([])
      } )
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
