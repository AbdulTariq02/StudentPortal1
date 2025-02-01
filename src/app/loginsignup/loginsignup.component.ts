import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent implements OnInit {



  value: 'register' | 'login' = 'login'
  registerObj: registerModel = new registerModel()
  loginObj: loginModel = new loginModel()

  toggle(form: 'register' | 'login') {
    this.value = form
  }
  constructor(private snackbar: MatSnackBar,private route:Router) { }

  inputType: string = 'password';  

  toggleInput() {
    debugger
  
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
  registerform() {


    if (!this.registerObj.email || !this.registerObj.name || !this.registerObj.passward) {

      this.snackbar.open('Fill your registration form', ``, {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['error-snackbar']
      });
    } else {
      const localuser = localStorage.getItem('users');
      if (localuser != null) {
        const users = JSON.parse(localuser);
        users.push(this.registerObj);
        
        localStorage.setItem('users', JSON.stringify(users));
        
      } else {
        const users = [];
        users.push(this.registerObj);
        localStorage.setItem('users', JSON.stringify(users));
      }



      this.snackbar.open(' registeretion successfully! so now login your account', ``, {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['success-snackbar']
      });
    }
  }


  loginform() {
    debugger
    const localusers = localStorage.getItem('users');
    if (localusers != undefined) {
      const users = JSON.parse(localusers);
      const isUserExist = users.find((user: registerModel) =>
        user.email === this.loginObj.email && user.passward === this.loginObj.passward
      );

debugger
      if (isUserExist != undefined &&
        this.registerObj.email === this.loginObj.email &&
        this.registerObj.passward === this.loginObj.passward) {
          this.snackbar.open('Your account is login successfully!', ``, {
            duration: 1000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['success-snackbar']
          });
        // alert('Login Successful!');
        localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
        this.route.navigateByUrl('/dashboard')
      }
       

      else {
        this.snackbar.open('Email or Passward is incorrect', ``, {
          duration: 1000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['error-snackbar']
        });
      }
    }
    
  }
  ngOnInit(): void {
  }
 
  color = true
sunIcon: string = '<i class="fa-solid fa-sun"></i>';
moonIcon: string = '<i class="fa-solid fa-moon"></i>';

  toggle2(){
this.color = !this.color
if(this.color){
  document.body.style.backgroundColor = '#F5F5F5'
 
 

}else{
  document.body.style.backgroundColor = '#212121'
}
  }

}

export class registerModel {
  name: string
  email: string
  passward: string
  constructor() {
    this.name = '';
    this.email = '';
    this.passward = '';
  }
}
export class loginModel {

  email: string
  passward: string
  constructor() {
  
    this.email = '';
    this.passward = '';
  }
}
