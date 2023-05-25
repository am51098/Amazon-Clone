import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsValidGuard implements CanActivate {
  isValid!:boolean;
  constructor (private authService: AuthService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.authService._isValid.subscribe({
        next: res=>{
          this.isValid=res;
        },
        error:err=>{
          console.log(err);
        }
      })

      if(this.isValid){
        console.log("hello from guard");
        return true;
      }else {
        this.route.navigate(['/auth']);
        return false;
      }

    }

      //   if(this.authService._isValid){
  //     console.log("hello from guard");
  //     return true;
  //   }else {
  //     this.route.navigate(['/auth']);
  //     return false;
  //   }

  // }

}
