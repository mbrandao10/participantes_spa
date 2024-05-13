import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ParticipanteFormComponent } from './participante-form/participante-form.component';
import { ParticipantesListaRoutingModule } from './participantes-lista-routing.module';
import { ParticipantesListaComponent } from './participantes-lista/participantes-lista.component';
import { ParticipantesTableComponent } from './participantes-table/participantes-table.component';

@NgModule({
  declarations: [
    ParticipantesListaComponent,
    ParticipanteFormComponent,
    ParticipantesTableComponent,
    ParticipantesTableComponent
  ],
  imports: [
    CommonModule,
    ParticipantesListaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class ParticipantesListaModule { }
