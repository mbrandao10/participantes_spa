import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'participantes-lista' },
  {
    path: 'participantes-lista',
    loadChildren: () => import('./participantes-lista/participantes-lista.module').then(m => m.ParticipantesListaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
