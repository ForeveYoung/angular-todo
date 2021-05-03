import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],

})
export class TodoitemComponent {
arr: Todo[] = [];

  onEdit( item: any){
    item.isEditing = true

  }
  onSubmit(item: any){
      item.isEditing = false;

  }

  onRemove(id:number){
    this.arr = this.arr.filter(item => item.id != id)
  }

}
