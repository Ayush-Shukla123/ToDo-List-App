import { Component } from '@angular/core';
import { ItemsService } from '../ayush.service';

@Component({
  selector: 'ayush',
  template: `
  <h2>{{getTitle()}}</h2>
  <ul>
    <li *ngFor="let item of items">
    </li>
  </ul>`,
  styleUrl: './ayush.component.css'
})
export class AyushComponent {
  title = 'Hey! Ayush this side.';
  items;

  constructor( service : ItemsService){
    this.items = service.getItems();

  }
  
  getTitle(){
      return this.title;
  }

}
