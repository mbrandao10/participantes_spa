import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantesListaRoutingModule } from './participantes-lista-routing.module';
import { ParticipantesListaComponent } from './participantes-lista/participantes-lista.component';


@NgModule({
  declarations: [
    ParticipantesListaComponent
  ],
  imports: [
    CommonModule,
    ParticipantesListaRoutingModule
  ]
})
export class ParticipantesListaModule { }
