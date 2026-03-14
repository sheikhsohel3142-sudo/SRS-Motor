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
  IonGrid,
  IonButton,
  IonIcon,
  IonCol,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonRow,
  IonToggle,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generate-bills',
  templateUrl: './generate-bills.page.html',
  styleUrls: ['./generate-bills.page.scss'],
  standalone: true,
  imports: [
    IonToggle,
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
    IonLabel,
  ],
})
export class GenerateBillsPage implements OnInit {
  busForm!: FormGroup;
  selectedFile: any;

  fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

  school2s = ['SRV', 'ARLM', 'DAV', 'Public School'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.busForm = this.fb.group({
      billingMonth: ['', Validators.required],
      school: ['', Validators.required],
      totalStudents: ['', Validators.required],
      totalBillAmount: ['', Validators.required],
      includeActiveStudents: ['Yes'],
      includePausedStudents: ['Yes'],
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  submitForm() {
    if (this.busForm.valid) {
      console.log(this.busForm.value);
    } else {
      this.busForm.markAllAsTouched();
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  removeFile(event: Event) {
    event.stopPropagation();
    this.selectedFile = null;
  }

  toggleChange(event: any, control: string) {
    this.busForm.patchValue({
      [control]: event.detail.checked ? 'Yes' : 'No',
    });
  }

  // Toggle checked condition
  isChecked(control: string) {
    return this.busForm.get(control)?.value === 'Yes';
  }
}
