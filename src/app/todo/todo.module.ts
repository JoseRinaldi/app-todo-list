import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { InputAddComponent } from './components/input-add/input-add.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ShaderModule } from '../shader/shader.module';
import { TaskComponent } from './components/task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    InputAddComponent,
    MainPageComponent,
    TaskComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ShaderModule,
    DragDropModule


  ],
  exports: [
    InputAddComponent,
    MainPageComponent,




  ]
})
export class TodoModule { }
