import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService, private route: Router){}
value = this.authService._email
signInForm!: FormGroup;

ngOnInit(): void {
  this.signInForm = new FormGroup({
    'password' : new FormControl(null, [Validators.required])
  })
}



public onSubmit(): void{

  let credentials = {
    email : this.value,
    password: this.signInForm.value.password
  }
 this.http.post('http://localhost:5000/user/Login', credentials).subscribe((res:any) => {
  console.log(res)
  localStorage.setItem('aman', res.token)
  this.authService._isLoggedIn.next(true)
  this.authService._isValid.next(false)

   this.route.navigate(['/dashboard'])
 })
}
}
