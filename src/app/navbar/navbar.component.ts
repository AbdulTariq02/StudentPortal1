import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

color = true
sunIcon: string = '<i class="fa-solid fa-sun"></i>';
moonIcon: string = '<i class="fa-solid fa-moon"></i>';

  toggle(){
this.color = !this.color
if(this.color){
  document.body.style.backgroundColor = '#F5F5F5'
  document.body.style.color = 'black'

 
 

}else{
  document.body.style.backgroundColor = '#212121'
   document.body.style.color = 'red'
}
  }

  change = false
  icon(){
    this.change = !this.change
   
    
  }
  

  ngOnInit(): void {
  }

}
