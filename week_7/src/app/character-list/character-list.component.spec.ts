import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display newly created characters', () => {
    const testCharacters: Character[] = [
      { name: 'Hero', class: 'Warrior', gender: "Male", id: 1, funFact: "", faction: "", startingLocation: ""},
      { name: 'Mage', class: 'Wizard', gender:  "Female", id: 2, funFact: "", faction: "", startingLocation: ""}
    ];
    component.characters = testCharacters;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('tr').length).toBe(2);
    expect(compiled.textContent).toContain('Hero');
    expect(compiled.textContent).toContain('Mage');
  });

  it('should display a message when no characters are present', () => {
    component.characters = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No characters available.');
  });
});
