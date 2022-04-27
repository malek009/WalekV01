import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup ;
  submitted : boolean =  false;
  constructor(private formBuilder : FormBuilder,
              private router: Router,
              private authService : AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true ;
    if(this.loginForm.invalid) {
      return;
    }
   this.authService.login(this.f['password'].value, this.f['username'].value);
   this.router.navigate(['/home']);
  }

}
