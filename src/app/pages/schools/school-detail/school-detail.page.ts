import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,

} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonText, IonInput, IonSelectOption, IonButton, IonCard, IonIcon, IonToggle, IonSelect } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.page.html',
  styleUrls: ['./school-detail.page.scss'],
  standalone: true,
  imports: [IonToggle, IonIcon, IonCard,
    IonButton,
    IonButton,
    IonText,
    IonInput,
    IonItem,
    IonButton,
    IonLabel,
    IonCol,
    IonRow,
    IonContent,
    IonTitle,
    IonHeader,
    IonContent,
    IonGrid,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonSelectOption,
    RouterLink, IonSelect],
})
export class SchoolDetailPage {
  isActive: boolean = true;
  isInvalid(controlName: string) {
    const control = this.schoolForm.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

  schoolForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.schoolForm = this.fb.group({
      schoolName: ['', Validators.required],
      schoolType: ['', Validators.required],
      affiliationBoard: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      primaryContactName: ['', Validators.required],
      contactPhone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      operatingDays: ['', Validators.required],
      schoolTimings: ['', Validators.required], 
      activeDrivers: ['', Validators.required],
      routesAssigned: ['', Validators.required],
    });
  }

  submit() {
    if (this.schoolForm.invalid) {
      this.schoolForm.markAllAsTouched();
      return;
    }

    console.log(this.schoolForm.value);
    // API call yahan aayega
  }
}
