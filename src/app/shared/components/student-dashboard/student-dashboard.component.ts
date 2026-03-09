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
    this.pushData();
    this.onDelete();
  }

  onDelete() {
    this._stdStudent.removeStdObs$.subscribe((id) => {
      let getIndex = this.stdArr.findIndex((s) => s.stdId === id);
      this.stdArr.splice(getIndex, 1);
    });
  }

  pushData() {
    this._stdStudent.newStdSubObs$.subscribe((data) => {
      console.log(data);
      this.stdArr.push(data);
      //use anything like push unshift, but orederd must maintain
    });
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
