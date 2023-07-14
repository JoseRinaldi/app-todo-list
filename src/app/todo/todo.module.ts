import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { InputAddComponent } from './components/input-add/input-add.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ShaderModule } from '../shader/shader.module';
import { TaskComponent } from './components/task/task.component';



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


  ],
  exports: [
    InputAddComponent,
    MainPageComponent,




  ]
})
export class TodoModule { }
