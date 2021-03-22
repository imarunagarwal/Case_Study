import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StudentService } from './Service/student.service';
import { StudentRecordComponent } from './student-record.component';

describe('ProductDetailComponent', () => {
  let component: StudentRecordComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<StudentRecordComponent>;
  let studentService: StudentService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StudentRecordComponent],
      providers: [
        {
          provide: StudentService,
          useValue: {
            getData: () =>
              of([
                {
                  Name: 'Jack',
                  Class: '1',
                  Section: 'A',
                  Sub1: '56',
                  Sub2: '56',
                  Sub3: '56',
                },
              ]),
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(StudentRecordComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    studentService = TestBed.inject<StudentService>(StudentService);
    fixture.detectChanges();
  });

  it('should create Component', () => {
    expect(component).toBeTruthy();
  });

  it('should create service instance', () => {
    expect(studentService).toBeTruthy();
  });

  it('should load students detail', () => {
    // Arrange
    spyOn(studentService, 'getData').and.callThrough();

    // Act
    component.ngOnInit();
    fixture.detectChanges();

    // Assert
    expect(studentService.getData).toHaveBeenCalled();
    expect(component.studentData).toEqual(component.studentDataCopy);
  });

  it('should have a table students detail', () => {
    // Arrange
    spyOn(studentService, 'getData').and.callThrough();

    // Act
    component.ngOnInit();
    fixture.detectChanges();

    // Assert
    expect(studentService.getData).toHaveBeenCalled();
    expect(element.querySelector('table')).toBeTruthy();
    expect(element.querySelector('table > thead')).toBeTruthy();
    expect(element.querySelector('table > thead > tr')).toBeTruthy();
    expect(element.querySelector('table > tbody > tr')).toBeTruthy();
  });
});
