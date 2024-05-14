import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipanteFormComponent } from './containers/participante-form/participante-form.component';
import { ParticipantesListaComponent } from './containers/participantes-lista/participantes-lista.component';
import { ParticipantesResolver } from './guards/participantes.resolver';

const routes: Routes = [
  { path: '', component: ParticipantesListaComponent },
  { path: 'new', component: ParticipanteFormComponent , resolve: { participantes: ParticipantesResolver } },
  { path: 'edit/:id', component: ParticipanteFormComponent, resolve: { participantes: ParticipantesResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantesListaRoutingModule { }
