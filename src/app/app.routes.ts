import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TasksFormComponent } from './pages/tasks/form/tasks.form.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/form', component: TasksFormComponent},
  {path: 'tasks/form/:id', component: TasksFormComponent},
  { path: '**', redirectTo: '' }
];
