import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';


export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent:() => import ('./home/home.page').then((m) => m.HomePage)
  // },

  // {
  //   path: 'profile',
  //   loadComponent: () =>
  //     import('./pages/profile/profile/profile.page').then((m) => m.ProfilePage),
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'schools',
  //   loadComponent: () => import('./pages/schools/schools/schools.page').then( m => m.SchoolsPage)
  // },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // {
  //   path: 'admin',
  //   component: SidebarComponent, // 👈 parent layout
  //   children: [
  //     {
  //       path: 'profile',
  //       loadComponent: () =>
  //         import('./pages/profile/profile/profile.page').then(
  //           (m) => m.ProfilePage,
  //         ),
  //     },

  //     {
  //       path: 'schools',
  //       loadComponent: () =>
  //         import('./pages/schools/schools/schools.page').then(
  //           (m) => m.SchoolsPage,
  //         ),
  //     },
  //   ],
  // },

  {
    path: 'admin',
    component: SidebarComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.page').then(
            (m) => m.ProfilePage,
          ),
      },
      {
        path: 'schools',
        loadComponent: () =>
          import('./pages/schools/schools.page').then(
            (m) => m.SchoolsPage,
          ),
      },
      {
        path: 'configration',
        loadComponent: () =>
          import('./pages/configration/configration.page').then(
            (m) => m.ConfigrationPage,
          ),
      },

      {
        path: 'schools/add-new-schools',
        loadComponent: () =>
          import('./pages/schools/add-new-schools/add-new-schools.page').then(
            (m) => m.AddNewSchoolsPage,
          ),
      },
      {
        path: 'schools/school-detail',
        loadComponent: () =>
          import('./pages/schools/school-detail/school-detail.page').then(
            (m) => m.SchoolDetailPage,
          ),
      },
      {
        path: 'schools/add-expense',
        loadComponent: () =>
          import('./pages/schools/add-expense/add-expense.page').then(
            (m) => m.AddExpensePage,
          ),
      },
      {
        path: 'bus',
        loadComponent: () =>
          import('./pages/bus/bus.page').then((m) => m.BusPage),
      },

      {
        path: 'bus/add-new-bus',
        loadComponent: () =>
          import('./pages/bus/add-new-bus/add-new-bus.page').then(
            (m) => m.AddNewBusPage,
          ),
      },
      {
        path: 'bus/bus-details',
        loadComponent: () =>
          import('./pages/bus/bus-details/bus-details.page').then(
            (m) => m.BusDetailsPage,
          ),
      },
      {
        path: 'driver',
        loadComponent: () =>
          import('./pages/driver/driver.page').then((m) => m.DriverPage),
      },

      {
        path: 'driver/add-new-driver',
        loadComponent: () =>
          import('./pages/driver/add-new-driver/add-new-driver.page').then(
            (m) => m.AddNewDriverPage,
          ),
      },
      {
        path: 'driver/driver-profile',
        loadComponent: () =>
          import('./pages/driver/driver-profile/driver-profile.page').then(
            (m) => m.DriverProfilePage,
          ),
      },
      {
        path: 'schools/add-advance',
        loadComponent: () =>
          import('./pages/schools/add-advance/add-advance.page').then(
            (m) => m.AddAdvancePage,
          ),
      },

      {
        path: 'students-and-parents',
        loadComponent: () =>
          import('./pages/students-and-parents/students-and-parents.page').then(
            (m) => m.StudentsAndParentsPage,
          ),
      },
      {
        path: 'students-and-parents/enroll-new-student',
        loadComponent: () =>
          import('./pages/students-and-parents/enroll-new-student/enroll-new-student.page').then(
            (m) => m.EnrollNewStudentPage,
          ),
      },
      {
        path: 'students-and-parents/student-profile',
        loadComponent: () =>
          import('./pages/students-and-parents/student-profile/student-profile.page').then(
            (m) => m.StudentProfilePage,
          ),
      },
      {
        path: 'billings-and-payments',
        loadComponent: () =>
          import('./pages/billings-and-payments/billings-and-payments.page').then(
            (m) => m.BillingsAndPaymentsPage,
          ),
      },

      {
        path: 'billings-and-payments/generate-bills',
        loadComponent: () =>
          import('./pages/billings-and-payments/generate-bills/generate-bills.page').then(
            (m) => m.GenerateBillsPage,
          ),
      },
      {
        path: 'billings-and-payments/bill-profile',
        loadComponent: () =>
          import('./pages/billings-and-payments/bill-profile/bill-profile.page').then(
            (m) => m.BillProfilePage,
          ),
      },

      {
        path: 'fare-chart',
        loadComponent: () =>
          import('./pages/fare-chart/fare-chart.page').then(
            (m) => m.FareChartPage,
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.page').then(
            (m) => m.DashboardPage,
          ),
      },
      {
        path: 'notice-and-announcement',
        loadComponent: () =>
          import('./pages/notice-and-announcement/notice-and-announcement.page').then(
            (m) => m.NoticeAndAnnouncementPage,
          ),
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'fare-chart',
    loadComponent: () =>
      import('./pages/fare-chart/fare-chart.page').then((m) => m.FareChartPage),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'notice-and-announcement',
    loadComponent: () =>
      import('./pages/notice-and-announcement/notice-and-announcement.page').then(
        (m) => m.NoticeAndAnnouncementPage,
      ),
  },
];
