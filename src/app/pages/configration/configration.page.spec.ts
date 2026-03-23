import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigrationPage } from './configration.page';

describe('ConfigrationPage', () => {
  let component: ConfigrationPage;
  let fixture: ComponentFixture<ConfigrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
