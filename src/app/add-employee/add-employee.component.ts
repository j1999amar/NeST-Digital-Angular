import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  employeeId = '';
  employeeName = '';
  phone = '';
  email = '';
  address = '';
  designation = '';
  readValue = () => {
    let data = {
      "employeeId": this.employeeId,
      "employeeName": this.employeeName,
      "phone": this.phone,
      "email": this.email,
      "address": this.address,
      "designation": this.designation,
    };
    console.log(data)
  };
}
