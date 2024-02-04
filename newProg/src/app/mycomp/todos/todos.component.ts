import { Todo } from './../../todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
 
  //localItem: string;
   todos: Todo[];
  constructor() {
    //this.localItem = localStorage.getItem("todos");
    //
    this.todos=[{
        sno:1,
        title: "This is title 1",
        desc:"Description 1",
        active: true
      },
      {
        sno:2,
        title: "This is title 2",
        desc:"Description 2",
        active: true
      },
      {
        sno:3,
        title: "This is title 3",
        desc:"Description 3",
        active: true
      },
      {
        sno:4,
        title: "This is title 4",
        desc:"Description 4",
        active: true
      },]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(todo);
    //localStorage.setItem("todos", JSON.stringify(this.todos));

  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    //localStorage.setItem("todos", JSON.stringify(this.todos));

  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    //localStorage.setItem("todos", JSON.stringify(this.todos));

  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

