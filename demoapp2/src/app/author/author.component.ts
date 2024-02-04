import { Component } from '@angular/core';
import { authorService } from '../author.service';

@Component({
  selector: 'author',
  template: `
  <h2>{{ Title }}</h2>
  <ul>
  <li *ngFor="let author of authors">
    {{author}}
    </li>
  </ul>
  `,
  styleUrl: './author.component.css'
})
export class AuthorComponent {

  Title = '3 Authors';

  authors;

  constructor( service : authorService){
    this.authors = service.getauthors();

  }



}
