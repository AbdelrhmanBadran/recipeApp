import { auth } from './core/guards/auth.guard';
import { MealLayoutComponent } from './layouts/meal-layout/meal-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'' , component:MealLayoutComponent , canActivate:[auth] , children:[
    {path:'' , redirectTo:'meals' , pathMatch:'full'},
    {path:'meals' , component:MealListComponent},
    {path:'cart' , component:CartComponent},
    {path:'mealDetalis/:id' , component:MealDetailsComponent},
  ]},
  {path:'' , component:AuthLayoutComponent , children:[
    {path:'' ,redirectTo:'landing' , pathMatch:'full'},
    {path:'landing' , component:LandingComponent},
    {path:'login' , component:LoginComponent},
    {path:'register' , component:RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration : 'enabled' , useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
