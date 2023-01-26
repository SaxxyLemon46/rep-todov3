import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { todoService } from '../service/todos.servizi';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {



  

  form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    completato: new FormControl(false),
  });


  constructor(private todoServizi: todoService, private route: ActivatedRoute){}




  onSubmit() {


    
      this.todoServizi.addTodo(this.form.getRawValue());
    }    
    



}
