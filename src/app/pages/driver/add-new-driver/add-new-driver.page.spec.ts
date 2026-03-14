import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewDriverPage } from './add-new-driver.page';

describe('AddNewDriverPage', () => {
  let component: AddNewDriverPage;
  let fixture: ComponentFixture<AddNewDriverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
