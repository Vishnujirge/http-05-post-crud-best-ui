import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

  constructor(

    private _matDailogRef : MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data : string
  ) { }

  ngOnInit(): void {
  }

}
