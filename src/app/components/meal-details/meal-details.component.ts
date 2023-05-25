import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/core/services/meal.service';
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent {


  constructor(private meal:MealService, private ActivatedRoute:ActivatedRoute , private _NgxSpinnerService:NgxSpinnerService , private Router:Router) { }
  //!===Global Varibales===>
  id:any
  noOFCart:any = 0
  mealDetails:any
  mealGroup!: FormGroup;
  selectedAdd:any[] =[]
  selectedTopp:any[] =[]
  selectedSauce:any[] =[]
  selectedExtra:any[] =[]
  NOItems: any = 1

  ngOnInit(): void {
    this.mealGroup = new FormGroup({
      add: new FormControl<string[] | null>(this.selectedAdd , Validators.required),
      topp: new FormControl<string[] | null>(this.selectedTopp),
      sauces: new FormControl<string[] | null>(this.selectedSauce ,  Validators.required),
      extra: new FormControl<string[] | null>(this.selectedExtra),
      instr: new FormControl<string | null>(null),
      noOfItem: new FormControl<number >(1 , [ Validators.pattern(/^[1-9]{1,3}$/)]),
    });

    this._NgxSpinnerService.show()
    this.ActivatedRoute.paramMap.subscribe({
      next: params =>{
        this.id = params.get('id')
        this.mealDetails = this.meal.meals.filter( meal => meal.id == this.id)
        setTimeout(() => {
          this._NgxSpinnerService.hide()
        }, 1000);
      }
    })
  }

  addToCart()
  {
    const toltalPrice =( this.mealDetails[0].price + this.selectedAdd.length * 0.8 + this.selectedTopp.length * 1.2 + this.selectedSauce.length * 0.65 + this.selectedExtra.length * 0.3 ) * this.NOItems;

    console.log(toltalPrice);


    let allData = { ...this.mealDetails[0] , ...this.mealGroup.value , toltalPrice: toltalPrice };

    console.log(allData);
    this.meal.cartContainer.subscribe({
      next: res=>{
        res.data.push(allData)
        console.log(res.data);
        this.meal.noOFCart.next(res.data.length )
        this.meal.noOFCart.subscribe({
          next: x=>{
            this.noOFCart = x
          }
        })
      }
    })
    // this.Router.navigate(['/cart'])
  }

}


