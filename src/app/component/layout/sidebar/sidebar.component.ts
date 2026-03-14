import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel, MenuController, IonHeader, IonToolbar, IonButton, IonTitle, IonButtons, IonTabBar, IonSplitPane, IonRouterOutlet, IonMenuToggle, IonApp,  } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [ IonMenu, IonContent, IonList, IonItem, IonIcon, IonLabel, IonHeader, IonToolbar, IonButton, IonTitle, IonButtons, IonTabBar, IonSplitPane, IonRouterOutlet, IonMenuToggle, IonApp, RouterLink, RouterOutlet, RouterModule, RouterLinkActive],
})
export class SidebarComponent  implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe(event =>{
      console.log('router event',event)
    })
   }

  ngOnInit() {}
 

 

}
