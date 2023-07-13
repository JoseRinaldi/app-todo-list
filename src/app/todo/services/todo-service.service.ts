import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public tareas : string [] = [];

  constructor() { }

  addTarea(tarea : string): void {

    const newtarea : string = tarea;

    this.tareas.push(newtarea);

  }

  deleteTareaByIndex(index:number){
    this.tareas.splice(index, 1);
  }
}
