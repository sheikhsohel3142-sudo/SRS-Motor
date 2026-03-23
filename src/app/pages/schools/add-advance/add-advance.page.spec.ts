import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAdvancePage } from './add-advance.page';

describe('AddAdvancePage', () => {
  let component: AddAdvancePage;
  let fixture: ComponentFixture<AddAdvancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
