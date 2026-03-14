import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-fare-chart',
  templateUrl: './fare-chart.page.html',
  styleUrls: ['./fare-chart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FareChartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
