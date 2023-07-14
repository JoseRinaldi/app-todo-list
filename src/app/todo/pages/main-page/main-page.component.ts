import { TodoService } from './../../services/todo-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'todo-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  constructor(private todo : TodoService){}

  get tareas(): string[] {
    return [...this.todo.tareas];
  }

  onNewTarea( tarea: string ):void {
    this.todo.addTarea(tarea);
  }

  onDeleteTarea( index: number ):void {
    this.todo.deleteTareaByIndex( index );
  }

  // onMoveTarea(event: CdkDragDrop<string[]>):void{
  //   this.todo.moveTarea(event)

  // }

}
