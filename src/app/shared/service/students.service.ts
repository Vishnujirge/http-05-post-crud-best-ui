import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Istd } from '../models/iStudents';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  BASE_URL: string = environment.BASE_URL;
  STUDENT_URL: string = `${this.BASE_URL}/student.json`;

  constructor(private _http: HttpClient) {}

  private newStdSub$: Subject<Istd> = new Subject<Istd>();
  newStdSubObs$: Observable<Istd> = this.newStdSub$.asObservable();

  private removeStdSub$: Subject<string> = new Subject<string>();
  removeStdObs$: Observable<String> = this.removeStdSub$.asObservable();

  private editStdSub$: Subject<Istd> = new Subject<Istd>();
  editStdObs$: Observable<Istd> = this.editStdSub$.asObservable();

  private updateStdSub$: Subject<Istd> = new Subject<Istd>();
  updateStdObs$: Observable<Istd> = this.updateStdSub$.asObservable();

  updateStd(std: Istd) {
    this.updateStdSub$.next(std);
  }

  setEditStd(std: Istd) {
    this.editStdSub$.next(std);
  }

  setRemoveStdId(id: string) {
    this.removeStdSub$.next(id); // as observer
  }

  // fetchStudents(): Observable<any[]> {
  //   return this._http.get<any>(this.STUDENT_URL).pipe(
  //     map(obj => {
  //       if (!obj) return [];

  //       let stdArr: any[] = [];
  //       for (const key in obj) {
  //         stdArr.push({ ...obj[key], stdId: key });
  //       }
  //       return stdArr;
  //     })
  //   );
  // }

  fetchStudents(): Observable<any[]> {
    return this._http.get<any>(this.STUDENT_URL).pipe(
      map((obj) =>
        // Object.keys(obj || {})
        //   .filter((key) => obj[key])
        //   .map((key) => ({ ...obj[key], stdId: key })),
        // ),

        Object.keys(obj || {})
          .filter((key) => obj[key])
          .map((key) => ({ ...obj[key], stdId: key })),
      ),
    );
  }

  createStd(stdObj: Istd): Observable<any> {
    return this._http.post(this.STUDENT_URL, stdObj);
  }

  setNewStd(newStd: Istd) {
    this.newStdSub$.next(newStd);
  }

  removeStd(id: string): Observable<any> {
    let REMOVE_URL: string = `${this.BASE_URL}/student/${id}.json`;
    return this._http.delete<any>(REMOVE_URL);
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
