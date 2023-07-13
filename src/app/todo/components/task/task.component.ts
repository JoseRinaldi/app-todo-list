import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent {

  @Input()
  public listTask : string[] = [];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter( index: number ):void {
    this.onDelete.emit(index);

  }



}
