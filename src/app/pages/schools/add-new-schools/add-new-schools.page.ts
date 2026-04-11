import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonGrid, IonContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonLabel, IonSelectOption, IonButton, IonCard, IonList, IonItem, IonInput, IonSelect, IonIcon, IonText, IonButtons, IonBackButton } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-new-schools',
  templateUrl: './add-new-schools.page.html',
  styleUrls: ['./add-new-schools.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonText, IonIcon, IonInput, IonItem, IonList, IonCard, IonButton, IonLabel, IonCol, IonRow, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonContent, IonGrid, CommonModule, FormsModule, ReactiveFormsModule, IonSelectOption, IonSelect,RouterLink]
})
export class AddNewSchoolsPage {
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
      contactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      operatingDays: ['', Validators.required],
      schoolTimings: ['', Validators.required],
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