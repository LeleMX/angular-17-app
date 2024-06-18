import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NgFor, NgIf, UpperCasePipe
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
