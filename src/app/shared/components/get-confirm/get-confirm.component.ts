import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss'],
})
export class GetConfirmComponent implements OnInit {
  msg!: string;
  constructor(
    private _matDialogRef: MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: string,
    private _snackBar: MatSnackBar,
  ) {
    this.msg = data;
  }

  ngOnInit(): void {}

  onClose(flag: boolean) {
    this._matDialogRef.close(flag);
  }

  password: string = '';
  adminPassword = '1'; 

  confirmDelete() {
    if (this.password === this.adminPassword) {
      this._matDialogRef.close(true);
    } else {
      // alert('Wrong password');
      this._snackBar.open('Wrong Password', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
        
      });
    }
  }
}
