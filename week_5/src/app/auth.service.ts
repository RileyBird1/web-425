import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'; 

export interface User {

  empId: number;
  email: string;
  password: string;
} 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject(<boolean>false);

  constructor(private cookieService: CookieService, private router: Router) {
    this.users = [
      { empId: 1, email: 'galactic.smuggler@starwars.com', password: 'MayTheForce99'},
      { empId: 2, email: 'boba.fett.@starwars.com', password: 'Mandalorian123'},
      { empId: 3, email: 'naboo.guard@starwars.com', password: 'JarJarBinks1'},
      { empId: 4, email: 'corellian.pilot@starwars.com', password: 'HanSolo77'},
      { empId: 5, email: 'princess.of.rebellion@starwars.com', password: 'LeiaOrgana88'}
    ];  
  }
  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }
  
  signin(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout(): void {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }  

}