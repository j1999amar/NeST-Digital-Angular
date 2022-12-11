import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  employeeId=''
  task=''
  readValue=()=>{
    let data={
      "employeeId":this.employeeId,
      "task":this.task
    }
  console.log(data)
  this.employeeId=''
  this.task=''

  }

}
