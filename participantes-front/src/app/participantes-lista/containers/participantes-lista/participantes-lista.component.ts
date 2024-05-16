import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Participantes } from '../../model/participantes';
import { ParticipantesListaService } from '../../services/participantes-lista.service';
import { ParticipantePage } from '../../model/participante-Page';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-participantes-lista',
  templateUrl: './participantes-lista.component.html',
  styleUrls: ['./participantes-lista.component.scss']
})
export class ParticipantesListaComponent implements OnInit {

  participantes_lista$: Observable<ParticipantePage> | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageIndex = 0;
  pageSize = 10;

  constructor(
    private participantesListaService: ParticipantesListaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
   }

   refresh(pageEvent: PageEvent = {length: 0, pageIndex: 0, pageSize: 10} ) {
    this.participantes_lista$ = this.participantesListaService.lista(pageEvent.pageIndex, pageEvent.pageSize)
    .pipe(
      tap(() => {
        this.pageIndex = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
      }),
      catchError(error =>{
        this.onError('Erro ao carregar Lista de perticipantes.')
        return of({participantes: [], totalEllements: 0, totalPages: 0})
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

  onEdit(participante: Participantes) {
    this.router.navigate(['edit', participante._id], { relativeTo: this.route });
  }

  onRemove(participantes: Participantes) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.participantesListaService.remove(participantes._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Curso removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }
}
