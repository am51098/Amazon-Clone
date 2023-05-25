import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   _isLoggedIn = new BehaviorSubject<boolean>(false);
   _email = new Subject<string>;
   _isValid = new BehaviorSubject<boolean>(false);




}
