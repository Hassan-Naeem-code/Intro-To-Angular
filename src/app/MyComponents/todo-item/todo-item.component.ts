import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Todo} from '../../Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() "getTodo": Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(getTodo : Todo){
    this.todoDelete.emit(getTodo);
  }
}