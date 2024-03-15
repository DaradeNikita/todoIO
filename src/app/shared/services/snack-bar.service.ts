import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _matSnack : MatSnackBar) { }

  openSnack(msg: string,action:string){
    this._matSnack.open(msg,action,{
      duration:1000,
      horizontalPosition :'right',
      verticalPosition : 'bottom'
    })
  }
}
