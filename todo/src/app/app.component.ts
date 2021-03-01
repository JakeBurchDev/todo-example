import { Component, OnInit } from '@angular/core';
import { ToDo } from './Interfaces/todo';
import { ToDoService } from './Services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newToDoText:string = '';
  toDos: Array<ToDo> = [];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.getCurrentToDos();
  }

  getCurrentToDos() {
    return new Promise(resolve => {
      this.toDoService.getAllToDos().subscribe(response => {
        this.toDos = response.length ? response : [];
        resolve(null);
      });
    });
  }

  addToDo() {
    this.toDoService.createToDo({ id: 1, text: this.newToDoText } as ToDo).subscribe(() => {
       this.getCurrentToDos().then(() => this.newToDoText = '');
    });
  }

  getToDoById() {

  }

  updateToDo() {

  }

  deleteToDo(id) {
    this.toDoService.deleteToDo(id).subscribe(() => this.getCurrentToDos());
  }
}
