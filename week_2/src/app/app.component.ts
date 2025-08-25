import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="flex-wrapper">
  <header class="banner">
    <h1>RPG Character Builder</h1>
  </header>
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
  `]


})
export class AppComponent {
  title = 'rpg-character-builder';
}
