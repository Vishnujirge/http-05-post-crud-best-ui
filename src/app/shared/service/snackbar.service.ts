import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}
  showMessage(message: string, action: string = 'Close') {
    this._snackBar.open(message, action, {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

// import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Injectable({
//   providedIn: 'root'
// })
// export class SnackbarService {

//   constructor(private snackBar: MatSnackBar) {}

//   showMessage(message: string, action: string = 'Close') {
//     this.snackBar.open(message, action, {
//       duration: 3000,
//       horizontalPosition: 'right',
//       verticalPosition: 'top'
//     });
//   }

// }
