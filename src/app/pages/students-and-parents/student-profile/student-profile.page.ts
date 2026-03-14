import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonCol,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonRow,
  IonGrid,
  IonIcon,
  IonToggle,
  IonInput,
  IonSelect,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonToggle,
    IonIcon,
    IonGrid,
    IonRow,
    IonLabel,
    IonItem,
    IonCol,
    IonButton,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSelectOption,
    ReactiveFormsModule,
    IonSelect,
    RouterLink,
    FormsModule
  ],
})
export class StudentProfilePage implements OnInit {
  isActive: boolean = true;
  studentForm!: FormGroup;
  billingForm!: FormGroup;
  activityLog = [
  { date: '01 Sep 2024', message: 'Student enrolled' },
  { date: '10 Oct 2024', message: 'Status changed to Paused' },
  { date: '05 Nov 2024', message: 'Billing resumed' }
];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      studentName: ['Michael'],
      admissionNumber: ['AD579485'],

      grade: ['10th'],
      section: ['A'],

      school: ['ARLM'],
      route: ['Route 51'],

      pickupStop: ['Triplicane'],
      assignedBus: ['TN31BF8236'],

      parentName: ['Grace'],
      relationship: ['Mother'],

      phoneNumber: ['9876537907'],
      email: ['abc@gmail.com'],

      billingStartDate: ['01/01/2026'],

      receiveNotice: ['Yes'],

      complimentaryStudent: ['Yes'],

      billingType: ['Billable'],

      studentStatus: ['Pause'],

      disableNotice: ['Yes'],

      active: ['Yes'],
    });
    this.billingForm = this.fb.group({
      monthlyFare: ['1000.00'],
      billingStartDate: ['2026-01-01'],
      outstandingDues: ['0'],
    });
  }

  updateStudent() {
    console.log(this.studentForm.value);
  }

  toggleChange(event: any, control: string) {
    this.studentForm.patchValue({
      [control]: event.detail.checked ? 'Yes' : 'No',
    });
  }

  // Toggle checked condition
  isChecked(control: string) {
    return this.studentForm.get(control)?.value === 'Yes';
  }
}
