import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollNewStudentPage } from './enroll-new-student.page';

describe('EnrollNewStudentPage', () => {
  let component: EnrollNewStudentPage;
  let fixture: ComponentFixture<EnrollNewStudentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollNewStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
