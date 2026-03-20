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


  //BE's -> date updated obj return as response ... if not get any response then you have /[can] to show on ui

    // 2.when yo call this function it will return . observalebe type of Istd data .
    // so when you subscribe it you will get Istd type of dat
    // we are sending a data to BE .. we are accepting anything fom BE. No need of data form . we are sending the data
    //when you are wrting a function type .. so you have to write what kind of data that patch method handel 
  updateStd(std: Istd): Observable<Istd> {
    // this.updateStdSub$.next(std); 
    // as observer
    let UPDATE_URL = `${this.BASE_URL}/student/${std.stdId}`;

    //update url + body -payload sned to BE
   return this._http.patch<Istd>(UPDATE_URL,std)
  }

  setEditStd(std: Istd) {
    this.editStdSub$.next(std); // as observer
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



  // here is one problem with firebase .. fetching the data . you dont get an Array ... get method give you an nested object so 
  // we are applying pipeble obrator for convrting it into the array
  fetchStudents(): Observable<any[]> {
    return this._http.get<any>(this.STUDENT_URL).pipe(
      map((obj) =>

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
