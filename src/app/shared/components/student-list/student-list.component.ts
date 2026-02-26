import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/iStudents';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  @Input() stdData!: Istd[];
  constructor() {}

  ngOnInit(): void {}
}
