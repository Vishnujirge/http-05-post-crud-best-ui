import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../service/students.service';
import { Istd } from '../../models/iStudents';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {
  stdArr: Array<Istd> = [];

  constructor(private _stdStudent: StudentsService) {} 

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._stdStudent.fetchStudents().subscribe({
      next: (data) => {
        console.log(data);
        this.stdArr = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  

}
