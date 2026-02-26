import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

const matArr = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
];

@NgModule({
  imports: [...matArr],
  exports: [...matArr],
})
export class MaterialModule {}
