import { ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from '../app.routes';
import { PlayersComponent } from './players.component';
import { Routes, Router, provideRouter } from '@angular/router'; 

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
      providers: [provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have correct route', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'players'); 
    expect(route).toBeDefined();
    if(route) {
      expect(route.component).toBe(PlayersComponent);
    }
  });
  it('should correctly display a list of players', () => {
    const compiled = fixture.nativeElement as HTMLElement; 
    const playersItem = compiled.querySelectorAll('tr'); 
    expect(playersItem.length).toEqual(component.players.length); 
  }); 
});
