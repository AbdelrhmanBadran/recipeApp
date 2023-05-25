import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations:[   trigger('fade' , [
      transition(':enter' , [ animate('.5s'),
          style({})
        ])
      ,
      state('void' , style({
        clipPath: 'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 77%, 100% 100%, 100% 100%, 100% 100%, 100% 0%)'
      }))
    ])
  ]
})
export class LandingComponent {


  toggle!:boolean

  ngOnInit(): void {
    this.toggle = true
  }
}
