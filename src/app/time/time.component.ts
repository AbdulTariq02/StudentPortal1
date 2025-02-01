import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit  {

  constructor() { }

  curentDate = new Date()





  ngOnInit(): void {
    setInterval(()=>{
      this.curentDate = new Date()
    },1000 )
  }

}
