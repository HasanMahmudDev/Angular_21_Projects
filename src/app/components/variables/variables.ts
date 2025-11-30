import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {

  //string
  courseName: string = "Angular 21";
  currnetVersion = "v.21";
  rollNo: number = 121;
  productPrice = 100.50;
  isActive: boolean = false;
  isPresent: boolean = true;

  currentDate: Date = new Date();

  cityList: string[] = ["Hasan", "Mahmud", "Tanju"];
  rollNoArray: number[] = [1, 2, 55, 66];

  student = {
    name: 'Hasan',
    mobile: '01788288665',
    email: 'hasanmahmuddev@gmail.com'
  }

  studentList = [
    { name: 'Hasan', city: 'Ullapara' },
    { name: 'Tanju', city: 'Jamtail' },
    { name: 'Raju', city: 'Barguna' }
  ]

  constructor() {
    this.courseName = "3333333";
    this.rollNo = 2222;
  }
}
