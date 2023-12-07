import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'detail/:id', component:HomeDetailComponent },
];
