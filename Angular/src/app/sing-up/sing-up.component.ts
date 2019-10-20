import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styles: []
})
export class SingUpComponent implements OnInit {
  myform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myform = formBuilder.group({
      'fullname':[''],
      'email':[''],
      'password':['']
    })

    this.myform.valueChanges.subscribe((data)=>{
      console.log(data)
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myform);

  }

  

}
