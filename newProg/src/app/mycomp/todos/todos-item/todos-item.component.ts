
import { Todo } from './../../../todo';
import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent implements OnInit{

  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
   @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


constructor(){ }  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    OnClick(todo:Todo){
      this.todoDelete.emit(todo);
        console.log("OnClick Button has been triggered!!");
  }
  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }

}
