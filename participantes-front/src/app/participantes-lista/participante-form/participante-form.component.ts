import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ParticipantesListaService } from '../services/participantes-lista.service';

@Component({
  selector: 'app-participante-form',
  templateUrl: './participante-form.component.html',
  styleUrls: ['./participante-form.component.scss']
})
export class ParticipanteFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ParticipantesListaService,
    private snackBar: MatSnackBar
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
    .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel() {

  }

  private onError () {
    this.snackBar.open('Erro ao salvar participante', 'fechar', {duration: 3000});
  }

}
