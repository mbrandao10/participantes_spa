import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantesListaComponent } from './participantes-lista/participantes-lista.component';
import { ParticipanteFormComponent } from './participante-form/participante-form.component';

const routes: Routes = [
  { path: '', component: ParticipantesListaComponent },
  { path: 'new', component: ParticipanteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantesListaRoutingModule { }
