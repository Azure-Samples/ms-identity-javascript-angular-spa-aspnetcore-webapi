import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from './app-config.json';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = config.resources.todoListApi.resourceUri;

  constructor(private http: HttpClient) { }

  getTodos() { 
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(id) { 
    return this.http.get<Todo>(this.url + '/' +  id);
  }
  
  postTodo(todo) { 
    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(id) {
    return this.http.delete(this.url + '/' + id);
  }

  editTodo(todo) { 
    return this.http.put<Todo>(this.url + '/' + todo.id, todo);
  }
}
