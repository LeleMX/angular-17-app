import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: `li {
    color: violet;
    font-size: 20px;
    list-style: none
  }
  `
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Minecraft'
    },
    {
      id: 2,
      name: 'Overwatch 2'
    },
    {
      id: 3,
      name: 'xDefiant'
    }    
  ];
}
