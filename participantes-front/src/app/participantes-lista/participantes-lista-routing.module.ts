import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantesListaComponent } from './participantes-lista/participantes-lista.component';

const routes: Routes = [
  { path: '', component: ParticipantesListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantesListaRoutingModule { }
