import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewBusPage } from './add-new-bus.page';

describe('AddNewBusPage', () => {
  let component: AddNewBusPage;
  let fixture: ComponentFixture<AddNewBusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
