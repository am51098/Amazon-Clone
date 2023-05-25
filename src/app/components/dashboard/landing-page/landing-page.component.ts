import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private route: Router, private authService: AuthService) {}
  public logout() {
  localStorage.removeItem('aman')
  this.route.navigate(['/auth'])
  this.authService._isLoggedIn.next(false)



}
}
