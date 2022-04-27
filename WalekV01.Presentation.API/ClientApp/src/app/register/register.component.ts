import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm! : FormGroup ;
  submitted : boolean =  false;
  user! : User;
  isDone : boolean = false;
  constructor(private formBuilder : FormBuilder,
    private serviceUser : UserService) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      age : ['',Validators.required],
      zipcode : ['',Validators.required],
      country : ['',Validators.required]
    })
  }
  get f() {
    return this.RegisterForm.controls;
  }

  onSubmit() {
    this.submitted = true ;
    if(this.RegisterForm.invalid) {
      return;
    }

    this.user =  {
      email : this.f['email'].value,
      password : this.f['password'].value,
      name : "malek",
      age : this.f['age'].value,
      zipcode : this.f['zipcode'].value,
      contry : this.f['country'].value
    }
    //this.serviceUser.add(this.user);
    this.isDone = true;
  }


}
