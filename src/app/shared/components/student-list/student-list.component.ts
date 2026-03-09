import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/iStudents';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  @Input() stdData!: Istd[];
  constructor(private _matDialog: MatDialog) {}

  ngOnInit(): void {}

  onRemove(id: string) {
    console.log(id);
    let matConfig = new MatDialogConfig();
    matConfig.width = '400px';
    matConfig.data = `Are You sure , you want to remove this data ${id} `;

    // matRef =
    this._matDialog.open(GetConfirmComponent, matConfig).afterClosed();
  }
}
