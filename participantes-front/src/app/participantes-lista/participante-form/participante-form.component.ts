import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ParticipantesListaService } from '../services/participantes-lista.service';

@Component({
  selector: 'app-participante-form',
  templateUrl: './participante-form.component.html',
  styleUrls: ['./participante-form.component.scss']
})
export class ParticipanteFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private service: ParticipantesListaService,
    private snackBar: MatSnackBar,
    private location: Location

  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null],
      sexo: [null],
      civil: [null],
      observacao: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess () {
    this.snackBar.open('Curso salvo com sucesso!!', 'fechar', {duration: 3000});
    this.onCancel();
  }

  private onError () {
    this.snackBar.open('Erro ao salvar participante', 'fechar', {duration: 3000});
  }

}
