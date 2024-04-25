import { Routes } from '@angular/router';
import { AllTaskComponent } from './component/pages/all-tasks/all-tasks.component';
import { ImportantTasksComponent } from './component/pages/important-tasks/important-tasks.component';
import { CompletedTasksComponent } from './component/pages/completed-tasks/completed-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
  },
  {
    path: 'importants',
    component: ImportantTasksComponent,
  },
  {
    path: 'completed',
    component: CompletedTasksComponent,
  },
];
