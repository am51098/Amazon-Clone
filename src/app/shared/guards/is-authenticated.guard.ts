import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  isLoggedIn!: boolean;
  constructor (private authService: AuthService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let token = localStorage.getItem('aman')

      this.authService._isLoggedIn.subscribe({
        next: res=>{
          this.isLoggedIn=res;
        },
        error:err=>{
          console.log(err);
        }
      });
      if(this.isLoggedIn){
        return true
      } else {
        this.route.navigate(['/auth']);
        return false

      }




  }

}
