import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-input-add',
  templateUrl: './input-add.component.html',
  styles: [
  ]
})
export class InputAddComponent {

  /* An empty array that is responsible
       to add a division */
       @Output()
       public item : EventEmitter<string> = new EventEmitter() ;

       /* A two-way binding performed which
          pushes text on division */
       public newTask:string = '';


       /* When input is empty, it will
          not create a new division */
       public addToList():void {

        if (this.newTask.length === 0) return;

        this.item.emit(this.newTask);

        this.newTask = '';

       }

    //    public addToListEnter(value:string):void {
    //     this.newTask = value;

    //     if (this.newTask === '') {
    //     }
    //     else {
    //         this.items.push(this.newTask);
    //         this.newTask = '';
    //     }
    // }
       /* This function takes to input the
          task, that has to be deleted*/
        //   public deleteTask(index:number) :void{
        //     this.item.splice(index, 1);
        // }

}
