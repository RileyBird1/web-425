import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should generate a random character ID between 1 and 1000 with no decimal places', ()=> {
    component.createCharacter(); 
    expect(component.Characters[0].id).toBeGreaterThan(0);
    expect(component.Characters[0].id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.Characters[0].id)).toBe(true);
  });
  it('should confirm appending new character to list of characters', ()=> {
    component.Character_Name = "Test Character";
    component.selectedGenderId = "Male";
    component.selectedClassId = "Warrior";
    component.createCharacter(); 
    expect(component.Characters[0].name).toBe("Test Character");
    expect(component.Characters[0].gender).toBe("Male");
    expect(component.Characters[0].class).toBe("Warrior");
  });
  it('should reset the form after character creation', ()=> {
    component.Character_Name = "Test Character";
    component.selectedGenderId = "Male";
    component.selectedClassId = "Warrior";
    component.createCharacter(); 
    expect(component.Character_Name).toBe("");
    expect(component.selectedGenderId).toBe("");
    expect(component.selectedClassId).toBe("");
  });
});
