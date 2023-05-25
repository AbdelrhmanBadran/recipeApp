import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';
import { MealService } from 'src/app/core/services/meal.service';


@Component({
  selector: 'app-meal-layout',
  templateUrl: './meal-layout.component.html',
  styleUrls: ['./meal-layout.component.scss']
})
export class MealLayoutComponent {
  constructor( private AuthService:AuthService , private _MealService:MealService) {}

  sidebarVisible!: boolean;
  noOFCart:any = 0

  ngOnInit(): void {
    this._MealService.noOFCart.subscribe({
      next : res=>{
        this.noOFCart = res
      }
    })

  }
  logout()
  {
    this.AuthService.logout()
  }
}
