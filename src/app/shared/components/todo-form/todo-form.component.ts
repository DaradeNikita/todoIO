import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
todoForm! : FormGroup;
@Output() sendData : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    this.createTodoForm()
  }
createTodoForm(){
  this.todoForm = new FormGroup({
    todoItem : new FormControl(null,[Validators.required])
  })
}
onTodoAdd(){
  if(this.todoForm.valid){
    let todoObj = this.todoForm.value;
    console.log(todoObj);
    this.sendData.emit(todoObj)
    this.todoForm.reset()
  }
}
}




