import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
   <h3> Comentarios de lo que sea </h3>
   <img src="https://th.bing.com/th/id/OIP.0-NRAmIOCvqRFji4h1pmmgAAAA?rs=1&pid=ImgDetMain" />
   <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt exercitationem unde
     mollitia culpa dolore illum fuga rerum quisquam ipsum voluptatibus. Quisquam, quibusdam.
     Harum, consequuntur laudantium ipsam corporis unde voluptate corrupti.</p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
