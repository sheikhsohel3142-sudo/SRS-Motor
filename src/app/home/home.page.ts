import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonButtons, IonButton, IonItem, IonIcon, IonLabel, IonMenu, IonSplitPane, IonApp, IonList } from '@ionic/angular/standalone';
import { SidebarComponent } from "../component/layout/sidebar/sidebar.component";
import { ProfilePage } from "../pages/profile/profile.page";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, SidebarComponent, IonRouterOutlet, IonButtons, IonButton, ProfilePage, IonItem, IonIcon, IonLabel, IonMenu, IonSplitPane, IonApp, IonList,IonRouterOutlet, RouterModule],
})
export class HomePage {
  constructor() {}
}
