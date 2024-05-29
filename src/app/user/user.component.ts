import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'lelekun';
  isLoggedIn = false;
  favGame = '';

  getFavorite (gameName: string) {
    this.favGame = gameName;
  }
  greet() {
    alert('Hola!!!')
  }
}
