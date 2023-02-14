import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';





const appRoutes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mensajes', component: MessagesComponent},

];




export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);