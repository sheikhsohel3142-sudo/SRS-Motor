import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillProfilePage } from './bill-profile.page';

describe('BillProfilePage', () => {
  let component: BillProfilePage;
  let fixture: ComponentFixture<BillProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BillProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
