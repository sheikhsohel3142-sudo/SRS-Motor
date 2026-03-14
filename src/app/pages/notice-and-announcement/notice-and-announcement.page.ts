import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notice-and-announcement',
  templateUrl: './notice-and-announcement.page.html',
  styleUrls: ['./notice-and-announcement.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NoticeAndAnnouncementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
