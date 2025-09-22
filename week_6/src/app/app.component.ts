import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NgForOf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { CommonModule, NgIf } from '@angular/common';

const NAV_ITEMS = [
  { route: '/', label: 'Home' },
  { route: '/create', label: 'Create Character' },
  { route: '/players', label: 'Players' },
  { route: '/faction', label: 'Factions' },
  { route: '/guild', label: 'Guilds' },
  { route: '/signin', label: 'Sign in' },
  { route: '/signout', label: 'Sign out' },
];

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgForOf, CommonModule],
  template: `
    <nav class="navbar">
      <ul>
        <li *ngFor="let item of navItems">
          <a [routerLink]="item.route">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  `,
})
export class NavComp {
  navItems = NAV_ITEMS;
}

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, CommonModule],
  template: `
    <nav class="footer-nav">
      <ng-container *ngFor="let item of navItems; let last = last">
        <a [routerLink]="item.route">{{ item.label }}</a
        ><span *ngIf="!last"> | </span>
      </ng-container>
    </nav>
  `,
})
export class FooterNavComp {
  navItems = NAV_ITEMS;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterNavComp, NavComp],
  template: `
    <div class="flex-wrapper flex-col">
      <header class="banner">
        <h1>RPG Character Builder</h1>
      </header>
      <div class="sign-in-container">
        <ng-container *ngIf="email; else signInLink">
          <p>Welcome, {{ email }}!</p>
          <button (click)="signout()">Sign Out</button>
        </ng-container>
        <ng-template #signInLink>
          <a routerLink="/signin" class="sign-in-link">Sign In</a>
        </ng-template>
      </div>

      <main class="main-content flex flex-col">
        <app-nav></app-nav>
        <section class="content flex-grow-1">
          <router-outlet></router-outlet>
        </section>
      </main>

      <footer class="footer">
        <app-footer-nav></app-footer-nav>
        <p id="copyright">&copy; 2025 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Times New Roman;
      }
      li {
        font-family: georgia;
      }
      #copyright {
        font-family: monospace;
      }
      .sign-in-container {
        text-align: right;
        padding-right: 20px;
        margin-top: 10px;
      }
      .sign-in-link {
        color: #000000;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
      }
      .sign-in-link:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class AppComponent {
  title = 'rpg-character-builder';
  email: string = '';

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}
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
