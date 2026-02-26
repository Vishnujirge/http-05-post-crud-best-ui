import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  BASE_URL: string = environment.BASE_URL;

  STUDENT_URL: string = `${this.BASE_URL}/student.json`;

  constructor(private _http: HttpClient) {}


fetchStudents(): Observable<any[]> {
  return this._http.get<any>(this.STUDENT_URL).pipe(
    map(obj => {
      if (!obj) return [];

      let stdArr: any[] = [];
      for (const key in obj) {
        stdArr.push({ ...obj[key], stdId: key });
      }
      return stdArr;
    })
  );
}

}




 // TUC way of code

  // fetchStudents(): Observable<any> {
  //   return this._http.get(this.STUDENT_URL).pipe(
  //     map((obj: any) => {
  //       let stdArr = [];
  //       for (const key in obj) {
  //         stdArr.push({ ...obj[key], stdId: key });
  //       }
  //       return stdArr;
  //     }),
  //   );
  // }