import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-auth-box',
  templateUrl: './auth-box.component.html',
  styleUrls: ['./auth-box.component.scss'],
  providers: [MessageService]
})
export class AuthBoxComponent {

  @ViewChild('signup') signupBtn!:ElementRef;
  @ViewChild('login') loginBtn!:ElementRef;
  @ViewChild('formBox') formBox!:ElementRef;
  value!:string

  showSuccess(message:any) {
    this.toastr.add({ severity: 'success', summary: 'Success', detail: message });
  }
  showError(message:any) {
    this.toastr.add({ severity: 'error', summary: 'Error', detail: message });
}
  constructor( private _AuthService:AuthService , private toastr:MessageService , private Router:Router , private spinner: NgxSpinnerService ) {

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
    this.formBox.nativeElement.style.cssText = "min-height : 550px;"
    }, 500);
  }
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null , [Validators.required]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Za-z0-9@]{6,}$/)]),
    rePassword:new FormControl(null , [Validators.required]),
    phone:new FormControl(null ,[Validators.required , Validators.pattern(/^(02)?01[0125][0-9]{8}$/)])
  } , {validators : this.rePasswrdMatch})

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required])
  })

  rePasswrdMatch(registerForm:any)
  {
    let rePassword = registerForm.get('rePassword')?.value
    let Password = registerForm.get('password')?.value
    if (rePassword === Password) {
      return null
    }else{
      registerForm.get('rePassword')?.setErrors({passwordMatch :'Must match password'})
      return {passwordMatch : 'Must match password'}
    }
  }

  slideDownSignUp(e:any)
  {
    let parent = e.target.parentNode;
    Array.from(parent.classList).find((element) => {
      if(element !== "slide-up") {
        parent.classList.add('slide-up')
        this.loginBtn.nativeElement.parentNode.parentNode.classList.remove('slide-up')
      }else{
        this.loginBtn.nativeElement.parentNode.parentNode.classList.add('slide-up')
        parent.classList.remove('slide-up')
      }
    });
  }

  slideDownLogin(e:any)
  {
    let parent = e.target?.parentNode?.parentNode;
    Array.from(parent.classList).find((element) => {
      if(element !== "slide-up") {
        parent.classList.add('slide-up')
        this.signupBtn.nativeElement.parentNode.classList.remove('slide-up')
      }else{
        this.signupBtn.nativeElement.parentNode.classList.add('slide-up')
        this.loginBtn.nativeElement.parentNode.parentNode.classList.remove('slide-up')
      }
    });
  }

  register(e:any){

    if (this.registerForm.valid) {
      this._AuthService.register(this.registerForm.value).subscribe({
        next:res=>{
          console.log(res);
          if (res.message === 'success') {
            this.showSuccess('Registered Successfully')
            setTimeout(() => {
              this.slideDownSignUp(e)
              this.registerForm.reset()
            }, 1000);
          }
        },
        error:err=>{
          console.log(err)
          this.showError(err.error.message)
        }
      })
    }
  }

  logIn(){

    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe({
        next:res=>{
          console.log(res);
            this.showSuccess('Login Successfully')
            localStorage.setItem('uToken' , res.token)
            this._AuthService.userData.next(res.token)
            setTimeout(() => {
              this.spinner.show();
            }, 1000);
            setTimeout(() => {
              this.Router.navigate(['meals'])
            }, 2000);
            setTimeout(() => {
              this.spinner.hide();
            }, 3000);
          },
          error:err=>{
            console.log(err);
            this.showError(err.error.message)
        }
      })
    }
  }



}

