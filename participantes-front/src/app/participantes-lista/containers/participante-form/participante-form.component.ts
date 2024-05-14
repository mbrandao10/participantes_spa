import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ParticipantesListaService } from '../../services/participantes-lista.service';
import { Participantes } from './../../model/participantes';

@Component({
  selector: 'app-participante-form',
  templateUrl: './participante-form.component.html',
  styleUrls: ['./participante-form.component.scss']
})
export class ParticipanteFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    cpf: [''],
    telefone: [''],
    sexo: [''],
    civil: [''],
    observacao: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ParticipantesListaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    const participantes: Participantes = this.route.snapshot.data['participantes'];
    this.form.setValue({
      _id: participantes._id,
      nome: participantes.nome,
      cpf: participantes.cpf,
      telefone: participantes.telefone,
      sexo: participantes.sexo,
      civil: participantes.civil,
      observacao: participantes.observacao

    });
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
