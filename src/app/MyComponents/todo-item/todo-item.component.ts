import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() i: number
  @Input() todo: Todo
  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter()
  @Output() todoCheckBox: EventEmitter<Todo>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("Onclick has been triggered");
    
  }
  onCheckBoxClick(todo){
    this.todoCheckBox.emit(todo)
  }

}
