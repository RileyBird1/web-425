import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="flex-wrapper">
  <header class="banner">
    <h1>RPG Character Builder</h1>
  </header>
  <div class="sign-in-container">
    @if (email) {
      <p>Welcome, {{ email }}!</p>
      <button (click)="signout()">Sign Out</button>
    } @else {
      <a routerLink="/signin" class="sign-in-link">Sign In</a>
    }
  </div>
  <main class="main-content">
    <nav class="navbar">
      <ul>
        <li><a href="/signin">Sign in</a></li>
        <li><a href="/create">Create Character</a></li>
        <li><a href="/players">Players</a></li>
        <li><a href="/faction">Factions</a></li>
        <li><a href="/guild">Guilds</a></li>
        <li><a routerLink="/">Home</a></li>
      </ul>
    </nav>
    <section class="content">
      <router-outlet />
    </section>
  </main>

  <footer class="footer">
    <nav class="footer-nav">
      <a routerLink="/">Home</a> |
      <a href="/create">Create Character</a> |  
      <a href="/signin">Sign in</a> |
      <a href="/players">Players</a> |
      <a href="/faction">Factions</a> |
      <a href="/guild">Guilds</a> |
    </nav>
    <p id="copyright">&copy; 2025 RPG Character Builder</p>
  </footer>
</div>
` , styles: [`
    h1 {font-family: Times New Roman;}
    li {font-family: georgia;}
    #copyright {font-family: monospace;}
    .sign-in-container { textalign: right; padding-right: 20px; margin-top: 10px;}
    .sign-in-link { color:#000000; textdecoration: none; font-family: 'Lato', sans-serif;}
    .sign-in-link:hover {text-decoration: underline;}
  `]


})
export class AppComponent {
  title = 'rpg-character-builder';
  email: string = '';

  constructor(private authService: AuthService, private cookieService: CookieService) {}
  ngOnInit(): void {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      } else {
        this.email = '';
      }
    });
  }
  signout(): void {
    this.authService.signout();
  }
}
