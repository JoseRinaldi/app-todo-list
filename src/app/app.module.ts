import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shader/sidebar/sidebar.component';
import { NavbarComponent } from './shader/navbar/navbar.component';
import { ShaderModule } from './shader/shader.module';
import { InputAddComponent } from './todo/components/input-add/input-add.component';
import { TaskComponent } from './todo/components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    InputAddComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
