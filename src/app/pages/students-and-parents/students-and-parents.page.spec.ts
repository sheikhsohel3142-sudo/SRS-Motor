import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsAndParentsPage } from './students-and-parents.page';

describe('StudentsAndParentsPage', () => {
  let component: StudentsAndParentsPage;
  let fixture: ComponentFixture<StudentsAndParentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAndParentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
