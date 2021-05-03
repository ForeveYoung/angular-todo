import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoinputComponent {
  task:FormGroup = new FormGroup({
    taskInp:new FormControl('')
  })
  @Input() elements: Todo[] = [];
  addOpt(option: any ){
    this.task.reset(); 
    if (option != ''){
      const uniqueId = Math.round(Math.random() * 1000);
      const newTask = {
        id: uniqueId,
        name: option,
        isEditing: false
      }
      this.elements.push(newTask);
    }
    }
}
