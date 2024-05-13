import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-participante-form',
  templateUrl: './participante-form.component.html',
  styleUrls: ['./participante-form.component.scss']
})
export class ParticipanteFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      telefone: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onCancel() {

  }

}
