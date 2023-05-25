import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  constructor(private http : HttpClient, private authService: AuthService, private route: Router){ }
   down = false;
   signInForm!: FormGroup;

   public open(): void {

  this.down ? this.down = false : this.down = true;
}

ngOnInit(): void {
  this.signInForm = new FormGroup({
    'email' : new FormControl(null, [Validators.required])

  })

}

  public onSubmit() {
    if (this.signInForm.invalid) {
      return;

    }

    // console.log(this.signInForm)

    this.http.post(`http://localhost:5000/user/CheckMail?credential=${this.signInForm.value.email}`, {} ).subscribe((res: any) => {

    console.log(res)
    // localStorage.setItem('aman', res.token)
    // this.authService._isLoggedIn.next(true)
    // this.route.navigate(['/dashboard'])
    if(res.Message){
      this.authService._email= res.email
      this.authService._isValid.next(true)
      this.route.navigate(['auth/log-in'])

    }
  }


    )


  }


}
