import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStudentModel } from './Model/IStudentMoel';
import { StudentService } from './Service/student.service';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css'],
})
export class StudentRecordComponent implements OnInit, OnDestroy {
  constructor(private studentService: StudentService) {}
  studentData: IStudentModel[] = [];
  studentDataCopy: IStudentModel[] = [];
  nameSort = 0;
  classSort = 0;
  sectionSort = 0;
  sub1Sort = 0;
  sub2Sort = 0;
  sub3Sort = 0;
  private getStudentDataSubscription: Subscription;

  // if 0 sort ascending
  // if 1 sort descending
  // if 2 unsort

  ngOnInit(): void {
    this.getStudentDataSubscription = this.studentService
      .getData()
      .subscribe((data: IStudentModel[]) => {
        this.studentData = data;
        this.studentDataCopy = [...data];
      });
  }

  ngOnDestroy(): void {
    this.getStudentDataSubscription.unsubscribe();
  }

  UnSort(): void {
    this.studentData = [...this.studentDataCopy];
  }

  SortByName(): void {
    if (this.nameSort === 0) {
      this.studentData.sort((a, b) => (a.Name > b.Name ? 1 : -1));
    }
    if (this.nameSort === 1) {
      this.studentData.sort((a, b) => (a.Name < b.Name ? 1 : -1));
    }
    if (this.nameSort === 2) {
      this.UnSort();
    }
    this.nameSort = (this.nameSort + 1) % 3;
  }

  SortByClass(): void {
    if (this.classSort === 0) {
      this.studentData.sort((a, b) => (a.Class > b.Class ? 1 : -1));
    }
    if (this.classSort === 1) {
      this.studentData.sort((a, b) => (a.Class < b.Class ? 1 : -1));
    }
    if (this.classSort === 2) {
      this.UnSort();
    }
    this.classSort = (this.classSort + 1) % 3;
  }

  SortBySection(): void {
    if (this.sectionSort === 0) {
      this.studentData.sort((a, b) => (a.Section > b.Section ? 1 : -1));
    }
    if (this.sectionSort === 1) {
      this.studentData.sort((a, b) => (a.Section < b.Section ? 1 : -1));
    }
    if (this.sectionSort === 2) {
      this.UnSort();
    }
    this.sectionSort = (this.sectionSort + 1) % 3;
  }

  SortBySub1(): void {
    if (this.sub1Sort === 0) {
      this.studentData.sort((a, b) => (a.Sub1 > b.Sub1 ? 1 : -1));
    }
    if (this.sub1Sort === 1) {
      this.studentData.sort((a, b) => (a.Sub1 < b.Sub1 ? 1 : -1));
    }
    if (this.sub1Sort === 2) {
      this.UnSort();
    }
    this.sub1Sort = (this.sub1Sort + 1) % 3;
  }

  SortBySub2(): void {
    if (this.sub2Sort === 0) {
      this.studentData.sort((a, b) => (a.Sub2 > b.Sub2 ? 1 : -1));
    }
    if (this.sub2Sort === 1) {
      this.studentData.sort((a, b) => (a.Sub2 < b.Sub2 ? 1 : -1));
    }
    if (this.sub2Sort === 2) {
      this.UnSort();
    }
    this.sub2Sort = (this.sub2Sort + 1) % 3;
  }

  SortBySub3(): void {
    if (this.sub3Sort === 0) {
      this.studentData.sort((a, b) => (a.Sub3 > b.Sub3 ? 1 : -1));
    }
    if (this.sub3Sort === 1) {
      this.studentData.sort((a, b) => (a.Sub3 < b.Sub3 ? 1 : -1));
    }
    if (this.sub3Sort === 2) {
      this.UnSort();
    }
    this.sub3Sort = (this.sub3Sort + 1) % 3;
  }

  Sort(key): void {
    switch (key) {
      case 'Name':
        this.SortByName();
        break;
      case 'Class':
        this.SortByClass();
        break;
      case 'Section':
        this.SortBySection();
        break;
      case 'Sub1':
        this.SortBySub1();
        break;
      case 'Sub2':
        this.SortBySub2();
        break;
      case 'Sub3':
        this.SortBySub3();
        break;
    }
  }
}
