import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
constructor(private snack:MatSnackBar){

}
studobj: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Age: new FormControl('', Validators.required),

    Phno: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'),
      Validators.minLength(11),       // Minimum 11 digits required
      Validators.maxLength(11)  ] ),
    hide: new FormControl(false)
  });

  data: any[] = [];
  add(){
    if(!this.studobj.valid){
      this.snack.open('Fill all values', ``, {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['error-snackbar']
      });

    }else{
      if(this.editValue !== null){
        this.snack.open('Your data is updated successfully!', ``, {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['success-snackbar']
        });
        this.data[this.editValue] = this.studobj.value
       
        this.editValue=null
      

      }else{
        this.data.push(this.studobj.value);
        this.snack.open('Your data is added successfully!', ``, {
          duration: 1000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['success-snackbar']
        });
      
      }
      this.studobj.reset(); 
    }
    
  }
  reset(){
    this.studobj.reset()
  }
  delete(index :number){
    this.data.splice(index,1)

  }
editValue :number|null = null
  
  hiden(id:number){
   this.data[id].hide =! this.data[id].hide
  }
  edit(num:number){
this.editValue = num
const bnew = this.data[num]
this.studobj.patchValue(bnew)
this.data[num] = []
this.snack.open('Now click Add New and update your data', ``, {
  duration: 1000,
  verticalPosition: 'top',
  horizontalPosition: 'center',
  panelClass: ['success-snackbar']
});


  }


 
  ngOnInit(): void {
  }

}
