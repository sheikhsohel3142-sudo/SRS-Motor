import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerateBillsPage } from './generate-bills.page';

describe('GenerateBillsPage', () => {
  let component: GenerateBillsPage;
  let fixture: ComponentFixture<GenerateBillsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
