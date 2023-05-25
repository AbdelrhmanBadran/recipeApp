import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild('nav') nav!:ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    let x = this.nav.nativeElement.offsetHeight
    console.log(x);
  }
}
