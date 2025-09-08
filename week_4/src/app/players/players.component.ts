import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Player {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [ CommonModule],
  template: `
    <div>
      <h2>Players</h2>
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
          @for(player of players; track player){
            <tr>
              <td>{{player.name}}</td>
              <td>{{player.gender}}</td>
              <td>{{player.class}}</td>
              <td>{{player.faction}}</td>
              <td>{{player.startingLocation}}</td>
              <td>{{player.funFact}}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styleUrl: "./players.component.css"
})
export class PlayersComponent {
  players:Player[]
  constructor(){
    this.players = [{
      "name": "Thorn",
      "gender": "Male",
      "class": "Warrior",
      "faction": "The Iron Brotherhood",
      "startingLocation": "Ironhold",
      "funFact": "Thorn once single-handedly defeated a dragon." 
    },
    {
      "name": "Zephyr",
      "gender": "Male",
      "class": "Warlock",
      "faction": "The Legion",
      "startingLocation": "Phasham",
      "funFact": "Zephyr earned his Warlock status by taking out a werewolf pack." 
    },
    {
      "name": "Seraphina",
      "gender": "Female",
      "class": "Witch",
      "faction": "The Syndicate",
      "startingLocation": "Glirvale",
      "funFact": "Seraphina escaped a band of Ironhold witches." 
    },
    {
      "name": "Dorian",
      "gender": "Male",
      "class": "Druid",
      "faction": "The Frostbound Assembly",
      "startingLocation": "Nore",
      "funFact": "Dorian has a pet squirrel." 
    },
    {
      "name": "Lyra",
      "gender": "Female",
      "class": "Cleric",
      "faction": "The Gilded Pinnacle",
      "startingLocation": "Drohull",
      "funFact": "Lyra can heal amputated limbs." 
    },
    {
      "name": "Cassius",
      "gender": "Male",
      "class": "Wizard",
      "faction": "The Skywatch Sentinels",
      "startingLocation": "Garburgh",
      "funFact": "Cassius learned how to fly using magic." 
    },
    {
      "name": "Elara",
      "gender": "Female",
      "class": "Siren",
      "faction": "The Obsidian Veil",
      "startingLocation": "Quinburgh",
      "funFact": "Elara has a double-timbre voice." 
    },
    {
      "name": "Orion",
      "gender": "Male",
      "class": "Ranger",
      "faction": "The Echoes of the Stoneforge",
      "startingLocation": "Glaport",
      "funFact": "Orion hates scorpions." 
    },
    {
      "name": "Rowan",
      "gender": "Female",
      "class": "Rogue",
      "faction": "The Galeheart Nomads",
      "startingLocation": "Vianstin",
      "funFact": "Rowan is a wanderer, never staying in one place too long." 
    },
    {
      "name": "Aldric",
      "gender": "Male",
      "class": "Paladin",
      "faction": "The Shattered Summit",
      "startingLocation": "Elesta",
      "funFact": "Aldric doesn't sleep." 
    }]
  }
}
