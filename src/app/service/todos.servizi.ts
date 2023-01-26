import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({ providedIn: 'root' })
export class todoService {
  private todos: Todo[] = [
    {
     id: 1,
     nome: "Pagare sasà",
     completato: false    
    },
    {
     id: 2,
     nome: "Chiamare GEnnarì",
     completato: true    
    },
    {
     id: 3,
     nome: "Aiutare Davidone",
     completato: false    
    },
  ];

  lastId = 4;

  getTodos(){
    return this.todos.slice();

  }


}
  
