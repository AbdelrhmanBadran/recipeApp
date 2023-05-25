import { Food } from './../interfaces/food';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MealService {
  noOFCart:BehaviorSubject<any> = new BehaviorSubject(0)

  constructor(private _HttpClient:HttpClient  ) {
      this.cartContainer.subscribe({
        next: res=>{
          this.noOFCart.next(res.data.length)
        }
      })
    }

  cartContainer:BehaviorSubject<any> = new BehaviorSubject({data: []})



  meals:Food[] = [

    {
      id: 1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: 'assets/images/food-1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      add:['sausage' , 'chicken' ,'pineapple' , 'olives'],
      toppings:['hot peppers', 'pepperoni slices', 'parmesan cheese'],
      sauces: ['Garlic Paste' , 'Honey' , 'Barbecue Sauce'],
      extra:['Green Beans' , 'Jalepeno Poppers' , 'Mozzarella Sticks' , 'Onion Rings'],
      ingredients : 'Its primary ingredient is ground beef and pork. Either meat is used in varying degrees, but pork is the most typical ingredient.'

    },
    {
      id: 2,
      name: 'Meatball',
      price: 20,
      cookTime: '20-30',
      favorite: true,
      origins: ['persia', 'middle east', 'china'],
      stars: 4.7,
      imageUrl: 'assets/images/food-2.jpg',
      tags: ['SlowFood', 'Lunch'],
      add:['Mashed Potatoes' , 'Buttered Noodles.' , 'Rice'],
      toppings:['Sliced Provolone Cheese' , 'Shredded Mozzarella' , 'Sliced Onions'],
      sauces: ['Hot pepper flakes' , ' Red wine' , 'Fresh garlic'],
      extra:['Green Beans' , 'Spaghetti Bolognese' , 'Caesar Salad'],
      ingredients : 'A meatball is ground meat rolled into a ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning.'

    },

    {
      id: 3,
      name: 'Hamburger',
      price: 5,
      cookTime: '10-15',
      favorite: false,
      origins: ['germany', 'us'],
      stars: 3.5,
      imageUrl: 'assets/images/food-3.jpg',
      tags: ['FastFood', 'Hamburger'],
      add:['Bacon' , 'Egg' , 'Onions'],
      toppings:['Maui burgers' , 'chicken Parm burgers' , 'tomato jam'],
      sauces: ['Ketchup' , 'mastrd' , 'Thousand Island'],
      extra:['Bread Crumbs' , 'Garlic'],
      ingredients : 'Quantity of meat (and quality of that meat) and The best sauce you can make for each version of the burger. A quality, lightly toasted roll that wont break or soften from the heat.'
    },
    {
      id: 4,
      name: 'Fried Potatoes',
      price: 2,
      cookTime: '15-20',
      favorite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: 'assets/images/food-4.jpg',
      tags: ['FastFood', 'Fry'],
      add:['Dextrose' , 'Sodium acid pyrophosphate' , 'Citric acid'],
      toppings:['Ribs in Gravy' , 'Crispy Barbecue Chicken Bites' , 'Bacon Wrapped Pork Chops'],
      sauces: ['Ketchup' , 'Ketchup' , 'Thousand Island'],
      extra:['Cheese sauce' , 'Milkshake' , 'Gochujang'],
      ingredients : 'Roast in the hot oven for 40 to 45 minutes or until crispy and golden brown. Transfer to a plate lined with paper towels to drain off any excess oil and serve.'
    },
    {
      id: 5,
      name: 'Chicken Soup',
      price: 11,
      cookTime: '40-50',
      favorite: false,
      origins: ['india', 'asia'],
      stars: 3.0,
      imageUrl: 'assets/images/food-5.jpg',
      tags: ['SlowFood', 'Soup'],
      add:['Yogurt' , 'Citrus fruit' , 'Nutmeg'],
      toppings:['Parsley' , 'Seeds' , 'Pesto'],
      sauces: ['Brown sauce'],
      extra:[' bit more salt'],
      ingredients : 'The essentials are vegetables and stock, plus olive oil or butter and some salt and pepper.'

    },
    {
      id: 6,
      name: 'Vegetables Pizza',
      price: 9,
      cookTime: '40-50',
      favorite: false,
      origins: ['italy'],
      stars: 4.0,
      imageUrl: 'assets/images/food-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      add:['fresh tomatoes' , 'peppers' , 'zucchini'],
      toppings:['Green bell pepper' , 'red onion' ],
      sauces: ['Ranch Sauce' , 'Garlic Sauce' , 'Hot Sauce'],
      extra:['mushrooms' , 'tomato' , 'olives'],
      ingredients : 'The most common ingredient in pizza dishes is olive oil. Flour, yeast, mozzarella cheese, white sugar, tomatoes and onion are also common ingredients in pizza recipes.'
    }
  ]


}




