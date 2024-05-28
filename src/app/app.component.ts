import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1> Hola gente este es mi proyecto llamado {{title}} </h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-app';
}
