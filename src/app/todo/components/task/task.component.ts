import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styles: [
  ],
})
export class TaskComponent {

  @Input()
  public listTask : string[] = [];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  // @Output()
  // public onMove: EventEmitter<CdkDragDrop<string[]>>   = new EventEmitter();

  onDeleteCharacter( index: number ):void {
    this.onDelete.emit(index);

  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.listTask, event.previousIndex, event.currentIndex);

  //   // this.onMove.emit(event);
  // }

  // moveItemInArray(this.listTask, event.previousIndex, event.currentIndex);


}
