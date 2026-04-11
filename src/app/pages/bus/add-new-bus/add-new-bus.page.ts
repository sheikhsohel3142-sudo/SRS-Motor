import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSelectOption,
  IonDatetimeButton,
  IonModal,
  IonButton,
  IonCardHeader,
  IonIcon,
  IonInput,
  IonSelect,
  IonItem, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-new-bus',
  templateUrl: './add-new-bus.page.html',
  styleUrls: ['./add-new-bus.page.scss'],
  standalone: true,
  imports: [IonText, 
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonCard,
    IonButton,
    IonCol,
    IonRow,
    IonContent,
    IonGrid,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonSelectOption,
    RouterLink,
    IonSelect,
  ],
})
export class AddNewBusPage implements OnInit {
  isInvalid(controlName: string) {
    const control = this.busForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }
  busForm!: FormGroup;

  fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

  school2s = ['SRV', 'ARLM', 'DAV', 'Public School'];


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.busForm = this.fb.group({
      busRegistrationNumber: ['', Validators.required],
      seatingCapacity: ['', Validators.required],
      fuelType: ['', Validators.required],
      assignSchool: ['', Validators.required],
      route: ['', Validators.required],
      serviceStartDate: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.busForm.valid) {
      console.log(this.busForm.value);
    } else {
      this.busForm.markAllAsTouched();
    }
  }
}
