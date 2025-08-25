import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'faction',
		component: CharacterFactionComponent
	},
	{
		path: 'create',
		component: CreateCharacterComponent
	},
	{
		path: 'guild',
		component: CreateGuildComponent
	},
	{
		path: 'players',
		component: PlayersComponent
	},
	{
		path: 'signin',
		component: SigninComponent
	}
];
