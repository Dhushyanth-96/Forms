import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formDetails : any;
  isSubmit: boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formDetails = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      contact:['',Validators.required, ],
      address:['',Validators.required],
      course:['',Validators.required]
    })
  }

  get f() {
    return this.formDetails.controls;
  }
  
  saveDetails(){
    this.isSubmit = true;
    console.log(this.formDetails.value);
  }

}
