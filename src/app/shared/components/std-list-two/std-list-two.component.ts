import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/iStudents';

@Component({
  selector: 'app-std-list-two',
  templateUrl: './std-list-two.component.html',
  styleUrls: ['./std-list-two.component.scss'],
})
export class StdListTwoComponent implements OnInit {
  @Input() stdData!: Istd[];

  constructor() {}

  ngOnInit(): void {}
  onRemove(stdid: string) {
    
  }
}
