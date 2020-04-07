import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { tokenRequest } from '../app-config';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  
  todo: Todo;

  todos: Todo[];

  displayedColumns = ['status', 'description', 'edit', 'remove'];

  constructor(private service: TodoService, private broadcastService: BroadcastService) { }

  ngOnInit(): void {
    this.broadcastService.subscribe('msal:acquireTokenSuccess', (payload) => {
      console.log(payload);
      console.log('access token acquired: ' + new Date().toString());
      
    });
 
    this.broadcastService.subscribe('msal:acquireTokenFailure', (payload) => {
      console.log(payload);
      console.log('access token acquisition fails');
    });

    this.getTodos();
  }

  getTodos(): void {
    this.service.getTodos().subscribe((response: Todo[]) => {
      this.todos = response;
    });
  }

  addTodo(add: NgForm): void {
    this.service.postTodo(add.value).subscribe(() => {
      this.getTodos();
    })
    add.resetForm();
  }

  checkTodo(todo): void {
    this.service.editTodo(todo).subscribe();
  }

  removeTodo(id): void {
    this.service.deleteTodo(id).subscribe(() => {
      this.getTodos();
    })
  }

}
