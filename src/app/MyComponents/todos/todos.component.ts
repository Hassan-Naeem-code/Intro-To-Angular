import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This Is A Title 1',
        desc: 'Description Is Here',
        active: false,
      },
      {
        sno: 2,
        title: 'This Is A Title 2',
        desc: 'Description Is Here',
        active: false,
      },
      {
        sno: 3,
        title: 'This Is A Title 3',
        desc: 'Description Is Here',
        active: false,
      },
    ];
  }

  ngOnInit(): void {}
}
