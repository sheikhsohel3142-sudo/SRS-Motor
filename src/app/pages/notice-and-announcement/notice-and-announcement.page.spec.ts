import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticeAndAnnouncementPage } from './notice-and-announcement.page';

describe('NoticeAndAnnouncementPage', () => {
  let component: NoticeAndAnnouncementPage;
  let fixture: ComponentFixture<NoticeAndAnnouncementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeAndAnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
