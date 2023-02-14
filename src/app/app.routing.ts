import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';





const appRoutes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'registro', component: RegisterComponent},

];




export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);