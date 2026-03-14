import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingsAndPaymentsPage } from './billings-and-payments.page';

describe('BillingsAndPaymentsPage', () => {
  let component: BillingsAndPaymentsPage;
  let fixture: ComponentFixture<BillingsAndPaymentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsAndPaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
