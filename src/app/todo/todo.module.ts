import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAddComponent } from './components/input-add/input-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputAddComponent,

  ]
})
export class TodoModule { }
