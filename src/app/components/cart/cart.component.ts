import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private _NgxSpinnerService:NgxSpinnerService , private _MealService:MealService) { }

  noOFCart:any = 0
  cartitems:any = []

  ngOnInit(): void {
    this._NgxSpinnerService.show()
    console.log(this._MealService.cartContainer.getValue().data);
    this.cartitems = this._MealService.cartContainer.getValue().data
    console.log(this.cartitems);

    this._MealService.cartContainer.subscribe({
      next : res=>{
        this.noOFCart = res.data.length
      }
    })

    setTimeout(() => {
      this._NgxSpinnerService.hide()
    }, 1000);
  }
}



