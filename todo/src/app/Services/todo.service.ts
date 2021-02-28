import { apiURL } from '../Utility/global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Interfaces/todo';

@Injectable()
export class ToDoService {
  constructor(private http: HttpClient) {}

  createToDo(toDo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(`${apiURL}/todo/`, toDo);
  }

  getAllToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${apiURL}/api/todo`);
  }

  getToDo(id: number): Observable<ToDo> {
    return this.http.get<ToDo>(`${apiURL}/api/ToDos/${id}`);
  }

  updateToDo(toDo: ToDo): Observable<void> {
    return this.http.put<void>(`${apiURL}/api/todo/${toDo.id}`, toDo);
  }

  deleteToDo(id: number) {
    return this.http.delete(`${apiURL}/api/todo/${id}`);
  }
}