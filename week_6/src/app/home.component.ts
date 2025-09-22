import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
standalone: true,
imports: [], template: `
	<div>
		<h2>The RPG Character Builder is a great way to visualize new characters!</h2>
		<p>
			Dive into your next adventure fully prepared. Our RPG Character Builder lets you easily create and customize your character—from race, class, and background to skills, abilities, and equipment. Whether you're crafting a mighty warrior, cunning rogue, or mystical mage, our intuitive interface and real-time stat tracking make it simple.
		</p>
		<p>
			Whether you're a seasoned dungeon delver or brand new to tabletop role-playing games, our RPG Character Builder takes the hassle out of character creation so you can jump straight into the action.
		</p>
		<div class="highlights-container">
			<div class="highlight">
				<img
					src="/assets/rpg_character_1.png"
					alt="image of steampunk character"
				/>
				<p>
					This enigmatic figure walks the line between invention and destruction. Clad in a deep navy longcoat trimmed with intricate gold patterns, he carries himself with a confident, calculating air. His gear is a mix of practicality and style—leather gloves and boots for agility, metallic knee guards for protection, and a custom-made harness securing a massive, rune-etched firearm on his back.
					A pair of glowing green goggles shields his eyes, hinting at countless hours spent in workshops, laboratories, and perhaps battlefields. Windswept hair and a stance ready for action suggest he’s no stranger to danger. The device strapped to his wrist hums faintly with arcane energy, marking him as more than just a tinkerer—he’s a true fusion of magic and technology.
					Whether he’s engineering explosive traps or enhancing allies with infused gear, this character is the brains of the party and not afraid to get his hands dirty when plans go awry.
				</p>
			</div>
			<div class="highlight">
				<img
					src="/assets/rpg_character_2.jpg"
					alt="image of sword-bearing character"
				/>
			<p>
				A shadow in both name and presence, this figure is a fusion of technology and stealth. His attire is a blend of dark, flowing cloth and sleek, mechanical enhancements—armor pieces that clink with precision and efficiency. The high-collared coat gives him an air of mystery, while the visible augmentations, including a sleek arm with integrated machinery and a cybernetic eye, hint at a life lived on the edge of both society and morality.
				The expression beneath the hooded cloak is one of cold calculation, and his stance suggests he’s as comfortable in a tight alley as he is in the heat of combat. A blade hangs loosely from his belt, easily accessible for quick strikes, while the complex gadgetry that runs along his body points to a deep knowledge of both engineering and combat tactics. His augmented eye likely gives him heightened senses, enabling him to see in the dark or detect weaknesses in enemies and structures alike.
			</p>
		</div>
		<div class="highlight">
			<img src="/assets/rpg_character_3.jpg" alt="image of medieval character" />
			<p>A figure of unwavering faith and solemn duty, this character is the embodiment of divine protection and justice. Clad in heavy, ornate armor that gleams with sacred symbolism, he stands as a shield for the innocent and a sword against the forces of darkness. The intricate designs of his armor, paired with a flowing, white cape lined with gold, suggest his high rank within a religious or knightly order, while the symbol of his faith rests proudly on his chest.
			A sturdy mace hangs at his side, ready to smite foes in the name of his deity, while his other hand is often raised in prayer or to guide his allies with divine spells. His face, though stern and calm, reveals a life dedicated to serving a higher cause—fighting not for personal glory, but for the protection of the weak and the destruction of evil.</p>
		</div>
	</div>
</div>
`, styleUrl: "./home.component.css"
})
export class HomeComponent {

}