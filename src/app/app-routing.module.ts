import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/site/home/home.component';
import {LoginComponent} from './components/site/login/login.component';
import {PropertiesComponent} from './components/site/properties/properties.component';
import {RentalsComponent} from './components/site/rentals/rentals.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'rentals', component: RentalsComponent},
  {path: 'login', redirectTo: '/login', pathMatch: 'full'},
  {path: 'properties', redirectTo: '/properties', pathMatch: 'full'},
  {path: 'rentals', redirectTo: '/rentals', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
