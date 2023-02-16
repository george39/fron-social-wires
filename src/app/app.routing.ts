import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GetMessagesComponent } from './components/messages/get-messages/get-messages.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagesUserActiveComponent } from './components/messages/messages-user-active/messages-user-active.component';



const appRoutes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mensajes', component: GetMessagesComponent},
    {path: 'crear-mensaje', component: MessagesComponent},
    {path: 'mensajes-usuario-activo', component: MessagesUserActiveComponent},

];




export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);