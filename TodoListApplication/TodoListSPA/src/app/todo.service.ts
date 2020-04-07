import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = apiConfig.webApi;

  constructor(private http: HttpClient) { }

  getTodos() { 
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(id) { 
    return this.http.get<Todo>(this.url + id);
  }
  
  postTodo(todo) { 
    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(id) {
    return this.http.delete(this.url + id);
  }

  editTodo(todo) { 
    return this.http.put<Todo>(this.url + todo.id, todo);
  }
}
