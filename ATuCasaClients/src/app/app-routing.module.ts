import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { MenuEditionComponent } from './main/menu-edition/menu-edition.component';
import { OrdersComponent } from './main/orders/orders.component';
import { ProfileEditionComponent } from './main/profile-edition/profile-edition.component';

const routes: Routes = [
  {path: "", component: MainComponent, children:[
    {path: "", component:HomeComponent},
    {path: "orders", component:OrdersComponent},
    {path: "profile", component:ProfileEditionComponent},
    {path: "menu", component:MenuEditionComponent},
  ]},
  {path: "auth", component: AuthComponent, children:[
    {path: "login", component: LoginComponent},
    {path: "registration", component: RegistrationComponent},
    {path: "forgot-password", component: ForgotPasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
