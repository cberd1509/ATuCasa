import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './Auth/registration/registration.component';
import { LoginComponent } from './Auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuSidebarComponent } from './main/menu-sidebar/menu-sidebar.component';
import {TooltipModule} from 'primeng/tooltip';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { HomeComponent } from './main/home/home.component';
import { OrdersComponent } from './main/orders/orders.component';
import { MenuEditionComponent } from './main/menu-edition/menu-edition.component';
import { ProfileEditionComponent } from './main/profile-edition/profile-edition.component';
import {ChartModule} from 'primeng/chart';
import { NgxGaugeModule } from 'ngx-gauge';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TabViewModule} from 'primeng/tabview';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {GMapModule} from 'primeng/gmap';
import { LocationPropertiesComponent } from './main/profile-edition/location-properties/location-properties.component';
import { GeneralPropertiesComponent } from './main/profile-edition/general-properties/general-properties.component';
import { PlacesAutocompleteComponent } from './shared/components/places-autocomplete/places-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MenuSidebarComponent,
    HomeComponent,
    OrdersComponent,
    MenuEditionComponent,
    ProfileEditionComponent,
    LocationPropertiesComponent,
    GeneralPropertiesComponent,
    PlacesAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TooltipModule,
    ScrollPanelModule,
    AutoCompleteModule,
    ChartModule,
    MultiSelectModule,
    NgxGaugeModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    GMapModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
