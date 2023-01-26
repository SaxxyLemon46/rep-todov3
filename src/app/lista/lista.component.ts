import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { todoService } from '../service/todos.servizi';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  todos!: Todo[];


  constructor(private todoServizi:todoService){}














  ngOnInit(): void {


  this.todos = this.todoServizi.getTodos();

  }



}
