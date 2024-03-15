import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 todoArray : Array<string> = [];
constructor(private _matSnack : MatSnackBar){}
  title = 'machineTest';
  ngOnInit(): void {
    
  }
  onDatasend(eve: any){
    this.todoArray.push(eve)
    console.log(eve);
    this._matSnack.open(`The ${eve.todoItem} added successfuuly in todoList`,'close')
    
  }
}
