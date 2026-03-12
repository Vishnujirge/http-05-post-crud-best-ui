import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StudentsService } from '../../service/students.service';
import { Istd } from '../../models/iStudents';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  stdForm!: FormGroup;
  isInEditMode: boolean = false;
  eidtStdId!: string;
  ngOnInit(): void {
    this.createStdForm();
    this._snackbar.showMessage('Data Fetch Successfully!');
    this._stdSerivice.editStdObs$.subscribe((stdData) => {
      if (stdData) {
        this.isInEditMode = true;
        this.eidtStdId = stdData.stdId;
        this.stdForm.patchValue(stdData);
      }
    });
  }

  constructor(
    private _stdSerivice: StudentsService,
    private _snackbar: SnackbarService,
  ) {}

  createStdForm() {
    this.stdForm = new FormGroup({
      fname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]{2,20}$'),
      ]),

      lname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]{2,20}$'),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      contact: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[6-9][0-9]{9}$'),
      ]),
    });
  }

  onSubmit() {
    if (this.stdForm.valid) {
      // API Call
      let stdObj: Istd = this.stdForm.value;

      this._stdSerivice.createStd(stdObj).subscribe({
        next: (data) => {
          console.log(data);
          //data = {name :'' }
          this._stdSerivice.setNewStd({ ...stdObj, stdId: data.name });
          this.stdForm.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });

      this.stdForm.markAllAsTouched();
      return;
    }

    console.log(this.stdForm.value);
  }

  ///////////////////////////  for btn run away
  btnStyle = {
    transform: 'translateX(-50%)',
  };

  onMouseMove(event: MouseEvent) {
    // ✅ Form VALID → button stays centered
    if (this.stdForm.valid) {
      this.btnStyle = {
        transform: 'translateX(-50%)',
      };
      return;
    }

    const wrapper = event.currentTarget as HTMLElement;
    const rect = wrapper.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const centerX = rect.width / 2;

    // mouse from left → go right
    if (mouseX < centerX) {
      this.btnStyle = {
        transform: 'translateX(40px)',
      };
    }
    // mouse from right → go left
    else {
      this.btnStyle = {
        transform: 'translateX(-120px)',
      };
    }
  }

  // ==================TUC code============

  //   stdForm!: FormGroup;

  //  ngOnInit(): void {
  //   this.createStdForm();
  // }

  //   createStdForm() {
  //     this.stdForm = new FormGroup({
  //       fname: new FormControl(null, [Validators.required]),
  //       lname: new FormControl(null, [Validators.required]),
  //       email: new FormControl(null, [Validators.required]),
  //       contact: new FormControl(null, [Validators.required]),
  //     });
  //   }
}
