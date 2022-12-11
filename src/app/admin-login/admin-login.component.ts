import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private route:Router){}
 data:any={}
  adminUserLogin=''
  adminPassword=''
  readValue=()=>{
    this.data={
      "adminUserLogin":this.adminUserLogin,
      "adminPassword":this.adminPassword
    }
    if(this.adminUserLogin=="admin"&&this.adminPassword=="12345") 
    {
      this.route.navigate(['/addEmployee'])
    }else{
      alert("Login Failed!!!")
    }
    
  }
}
