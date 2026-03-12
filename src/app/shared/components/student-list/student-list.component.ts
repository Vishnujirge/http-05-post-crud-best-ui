import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/iStudents';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { StudentsService } from '../../service/students.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  @Input() stdData!: Istd[];
  constructor(
    private _matDialog: MatDialog,
    private _stdService: StudentsService,
  ) {}

  ngOnInit(): void {}


    onEdit(std: Istd){
      this._stdService.setEditStd(std)
    }

  onRemove(id: string) {
    console.log(id);
    let matConfig = new MatDialogConfig();
    matConfig.width = '400px';
    matConfig.autoFocus = true;
    matConfig.disableClose = true;
    matConfig.hasBackdrop = true;
    matConfig.data = `Are You sure , you want to remove this data <strong>${id} </strong>`;

    // matRef =
    this._matDialog
      .open(GetConfirmComponent, matConfig)
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
        // api call to remove std
        this._stdService
          .removeStd(id)
          // Higher order observable means multipel subscibe
          .subscribe({
            next: (data) => {
              // console.log(data);
              this._stdService.setRemoveStdId(id)
            },
            error: (err) => {
              console.log(err);
            },
          });
      });
  }
}
