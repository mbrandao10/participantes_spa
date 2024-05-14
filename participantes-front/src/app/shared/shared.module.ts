import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';




@NgModule({
  declarations: [
    ErrorDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmationDialogComponent,
  ]
})
export class SharedModule { }
