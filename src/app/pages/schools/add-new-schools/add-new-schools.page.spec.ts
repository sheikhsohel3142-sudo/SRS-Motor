import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewSchoolsPage } from './add-new-schools.page';

describe('AddNewSchoolsPage', () => {
  let component: AddNewSchoolsPage;
  let fixture: ComponentFixture<AddNewSchoolsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSchoolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
