import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FareChartPage } from './fare-chart.page';

describe('FareChartPage', () => {
  let component: FareChartPage;
  let fixture: ComponentFixture<FareChartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FareChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
