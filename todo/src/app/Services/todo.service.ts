import { apiURL } from '../Utility/global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor(private http: HttpClient) {}

  createToDo(toDo: ToDo): Observable<ToDo> {
    return this.http.post<any>(`${apiURL}/todo/`, toDo);
  }

  getAllToDos(): Observable<ToDo[]> {
    return this.http.get<any>(`${apiURL}/todo`);
  }

  getToDo(id: number): Observable<ToDo> {
    return this.http.get<any>(`${apiURL}/ToDos/${id}`);
  }

  updateToDo(toDo: ToDo): Observable<void> {
    return this.http.put<any>(`${apiURL}/todo`, toDo);
  }

  deleteToDo(id: number) {
    return this.http.delete(`${apiURL}/todo/${id}`);
  }
}