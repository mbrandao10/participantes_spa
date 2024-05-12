import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ParticipantesListaRoutingModule } from './participantes-lista-routing.module';
import { ParticipantesListaComponent } from './participantes-lista/participantes-lista.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    ParticipantesListaComponent
  ],
  imports: [
    CommonModule,
    ParticipantesListaRoutingModule,
    AppMaterialModule

  ]
})
export class ParticipantesListaModule { }
