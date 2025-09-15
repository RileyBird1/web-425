import { Component, input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
export interface Option{
  id: string;
  name: string;
}
export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}


@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div>
      <form #characterForm="ngForm" (ngSubmit)="createCharacter();">
        <h1>Complete the form below to create a new character.</h1>
        <fieldset>
          <legend>My Character</legend>
          <label for="char_name">Character Name</label>
          <input type="text" id="char_name" name="char_name" class="char_name-input"[(ngModel)]="Character_Name" ngModel>
          <select name="gender" id="gender" [(ngModel)]="selectedGenderId" ngModel>
            @for (gender of genders; track gender) {
              <option value="{{ gender.id }}">{{ gender.name }}</option>
            }
          </select> 
          <select name="class" id="class" [(ngModel)]="selectedClassId" ngModel>
            @for (charclass of classes; track charclass) {
              <option value="{{ charclass.id }}">{{ charclass.name }}</option>
            }
          </select> 
          <button type="submit">Create Character</button>
        </fieldset>
      </form>
      <table>
        <thead>
          <th>Name</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Faction</th>
          <th>Starting Location</th>
          <th>Fun Fact</th>
        </thead>
        <tbody>
          @for(character of Characters; track character){
            <tr>
              <td>{{character.name}}</td>
              <td>{{character.gender}}</td>
              <td>{{character.class}}</td>
              <td>{{character.faction}}</td>
              <td>{{character.startingLocation}}</td>
              <td>{{character.funFact}}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>    
  `,
  styles: `
  div, form{ padding: 1%}
  h1 { font-family: 'Times New Roman', Times, serif; }

  table {
    font-family: 'Times New Roman', Times, serif;
    border-collapse: collapse;
    width: 75%;
  }
  td, th {
    border: 1px solid #c9bd9e;
    padding: 8px;
  }
  tr:nth-child(even){background-color: #e9e3d0;}
  tr:hover {background-color: #c9bd9e;}
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #8b6949;
    color: white;
  }`
})

export class CreateCharacterComponent {
genders:Option[];
classes:Option[];
selectedGenderId!:string;
selectedClassId!:string;
Character_Name!:string;
Characters:Character[] = [];
  constructor(){
    this.genders = [{
      id: "male",
      name: "Male"
    },
    {
      id: "female",
      name: "Female"
    },
    {
      id: "other",
      name: "Other"
    }]
    this.classes = [{
      id: "warrior",
      name: "Warrior"
    },
    {
      id: "warlock",
      name: "Warlock"
    },
    {
      id: "witch",
      name: "Witch"
    },
    {
      id: "druid",
      name: "Druid"
    },
    {
      id: "cleric",
      name: "Cleric"
    },
    {
      id: "wizard",
      name: "Wizard"
    },
    {
      id: "siren",
      name: "Siren"
    },{
      id: "ranger",
      name: "Ranger"
    },
    {
      id: "rogue",
      name: "Rogue"
    },
    {
      id: "paladin",
      name: "Paladin"
    }]
  }
  createCharacter(){
    const newCharacter:Character = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.Character_Name,
      gender: this.selectedGenderId,
      class: this.selectedClassId,
      funFact: "",
      faction: "",
      startingLocation: ""
    };
    console.log(newCharacter);
    this.Characters.push(newCharacter);
    this.resetForm();
  }
  resetForm(){
    this.Character_Name = "";
    this.selectedGenderId = "";
    this.selectedClassId = "";
  }
}
