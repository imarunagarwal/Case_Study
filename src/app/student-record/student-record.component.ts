import { Component, OnInit } from '@angular/core';
import { IStudentModel } from './Model/IStudentMoel';
import { StudentService } from './Service/student.service';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  studentData: IStudentModel[] = [];
  studentDataCopy: IStudentModel[] = [];
  nameSort: number = 0;
  classSort: number = 0;
  sectionSort: number = 0;
  sub1Sort: number = 0;
  sub2Sort: number = 0;
  sub3Sort: number = 0;
  
  // if 0 sort ascending 
  // if 1 sort descending
  // if 2 unsort

  ngOnInit(): void {
    this.studentService.getData().subscribe((data: IStudentModel[]) => {
      this.studentData = data;
      this.studentDataCopy = [...data];
    });
  }

  UnSort(){
    this.studentData =this.studentDataCopy;
  }

  SortByName() {
    if (this.nameSort == 0) {
      this.studentData.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
    }
    if (this.nameSort == 1) {
      this.studentData.sort((a, b) => (a.Name < b.Name) ? 1 : -1);
    }
    if (this.nameSort == 2) {
      this.UnSort();
    }
    this.nameSort = (this.nameSort + 1) % 3;
  }

  SortByClass() {
    if (this.classSort == 0) {
      this.studentData.sort((a, b) => (a.Class > b.Class) ? 1 : -1);
    }
    if (this.classSort == 1) {
      this.studentData.sort((a, b) => (a.Class < b.Class) ? 1 : -1);
    }
    if (this.classSort == 2) {
      this.UnSort();
    }
    this.classSort = (this.classSort + 1) % 3;
  }

  SortBySection() {
    if (this.sectionSort == 0) {
      this.studentData.sort((a, b) => (a.Section > b.Section) ? 1 : -1);
    }
    if (this.sectionSort == 1) {
      this.studentData.sort((a, b) => (a.Section < b.Section) ? 1 : -1);
    }
    if (this.sectionSort == 2) {
      this.UnSort();
    }
    this.sectionSort = (this.sectionSort + 1) % 3;
  }

  SortBySub1() {
    if (this.sub1Sort == 0) {
      this.studentData.sort((a, b) => (a.Sub1 > b.Sub1) ? 1 : -1);
    }
    if (this.sub1Sort == 1) {
      this.studentData.sort((a, b) => (a.Sub1 < b.Sub1) ? 1 : -1);
    }
    if (this.sub1Sort == 2) {
      this.UnSort();
    }
    this.sub1Sort = (this.sub1Sort + 1) % 3;
  }

  SortBySub2() {
    if (this.sub2Sort == 0) {
      this.studentData.sort((a, b) => (a.Sub2 > b.Sub2) ? 1 : -1);
    }
    if (this.sub2Sort == 1) {
      this.studentData.sort((a, b) => (a.Sub2 < b.Sub2) ? 1 : -1);
    }
    if (this.sub2Sort == 2) {
      this.UnSort();
    }
    this.sub2Sort = (this.sub2Sort + 1) % 3;
  }

  SortBySub3() {
    if (this.sub3Sort == 0) {
      this.studentData.sort((a, b) => (a.Sub3 > b.Sub3) ? 1 : -1);
    }
    if (this.sub3Sort == 1) {
      this.studentData.sort((a, b) => (a.Sub3 < b.Sub3) ? 1 : -1);
    }
    if (this.sub3Sort == 2) {
      this.UnSort();
    }
    this.sub3Sort = (this.sub3Sort + 1) % 3;
  }

  Sort(key) {
    switch (key) {
      case "Name":
        this.SortByName();
        break;
      case "Class":
        this.SortByClass();
        break;
      case "Section":
        this.SortBySection();
        break;
      case "Sub1":
        this.SortBySub1();
        break;
      case "Sub2":
        this.SortBySub2();
        break;
      case "Sub3":
        this.SortBySub3();
        break;
    }
  }
}
