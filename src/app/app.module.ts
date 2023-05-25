import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { initializeApp } from "firebase/app";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MealLayoutComponent } from './layouts/meal-layout/meal-layout.component';
import {  HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { AuthBoxComponent } from './components/auth-box/auth-box.component';


import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CardModule } from 'primeng/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FilterPipe } from './core/pipes/filter.pipe';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CartComponent } from './components/cart/cart.component';
import { MenuModule } from 'primeng/menu'
import { TabMenuModule } from 'primeng/tabmenu';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BadgeModule } from 'primeng/badge';
import { InputNumberModule } from 'primeng/inputnumber';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RatingModule } from 'primeng/rating';
@NgModule({
  declarations: [
    AppComponent,
    MealListComponent,
    MealDetailsComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AuthLayoutComponent,
    MealLayoutComponent,
    LandingComponent,
    AuthBoxComponent,
    FilterPipe,
    CartComponent
  ],
  imports: [
    RatingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    InputNumberModule,
    BadgeModule,
    InputTextareaModule,
    CheckboxModule,
    AccordionModule,
    ScrollTopModule,
    TabMenuModule,
    MenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    InputTextModule,
    PasswordModule,
    NgxSpinnerModule.forRoot({ type: 'pacman' }),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CardModule,
    MatSidenavModule,
    SidebarModule,
    ButtonModule,
    ProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
