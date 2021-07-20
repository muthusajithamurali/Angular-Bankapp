import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your banking partner"
  
  acno="please enter account number"

  pswd=""

  user:any={
    1000:{acno:1000,uname:"ram",password:"userone",balance:3000},
    1001:{acno:1001,uname:"ravi",password:"usertwo",balance:1000},
    1002:{acno:1002,uname:"sam",password:"userthree",balance:3000},
    1003:{acno:1003,uname:"srau",password:"userfour",balance:3000}

  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  

  login(){
    var acno=this.acno;
    var pswd=this.pswd;
    let accDetails=this.user;
    if(acno in accDetails){

      if(pswd==accDetails[acno]["password"]){
        
        alert("Login successful")
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("Incorrect password")
      }
    }
    else{
      alert("Invalid user")
    }
    
  }
}
