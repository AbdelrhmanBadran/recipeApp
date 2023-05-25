import { MealService } from './../../core/services/meal.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent {
  @ViewChild('loading') loading!:ElementRef;
  constructor(private MealService:MealService , private spinner:NgxSpinnerService) { }
  meals!:any[];
  searchTerm:string = ''


  ngOnInit(): void {
    this.spinner.show();
    this.getMeals()
}

  getMeals()
  {
    this.meals = this.MealService.meals
    setTimeout(() => {
      this.loading.nativeElement.classList.replace('d-flex','d-none')
      this.spinner.hide();
    }, 1000);
  }
  searchMeals()
  {
    this.loading.nativeElement.classList.replace('d-none','d-flex')
    setTimeout(() => {
      this.loading.nativeElement.classList.replace('d-flex','d-none')
    }, 1000);
  }

  
}
