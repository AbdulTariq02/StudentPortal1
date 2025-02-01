import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {


  user:any 
  constructor(private roter:Router) {
    let local = localStorage.getItem('loggedUser')
  if (local != null) {
    this.user=JSON.parse(local)
  }
   }
   logout(){
    localStorage.removeItem('loggedUser')
    localStorage.clear()
    this.roter.navigateByUrl('/loginsignup')
   }
  ngOnInit(): void {
  }

}
