import { Todo } from './../../todo';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {

  title !: string
  desc  !: string

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.todoAdd.emit(todo);
  }
  

}
