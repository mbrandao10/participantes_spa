import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ParticipantesListaRoutingModule } from './participantes-lista-routing.module';
import { ParticipantesListaComponent } from './participantes-lista/participantes-lista.component';

@NgModule({
  declarations: [
    ParticipantesListaComponent
  ],
  imports: [
    CommonModule,
    ParticipantesListaRoutingModule,
    AppMaterialModule,
    SharedModule

  ]
})
export class ParticipantesListaModule { }
