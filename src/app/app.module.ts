import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskStatusComponent } from './view-task-status/view-task-status.component';
const myRouter:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addEmployee",
    component:AddEmployeeComponent
  },
  {
    path:"addTask",
    component:AddTaskComponent
  },
  {
    path:"viewTaskStatus",
    component:ViewTaskStatusComponent
  }
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    AdminNavbarComponent,
    AddTaskComponent,
    ViewTaskStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(myRouter),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
