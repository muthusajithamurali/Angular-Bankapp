import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your banking partner"
  accnum="please enter account number"
  acno=""
  pswd=""

  user:any={
    1000:{acno:1000,uname:"ram",password:"userone",balance:3000},
    1001:{acno:1001,uname:"ravi",password:"usertwo",balance:1000},
    1002:{acno:1002,uname:"sam",password:"userthree",balance:3000},
    1003:{acno:1003,uname:"srau",password:"userfour",balance:3000}

  }


  constructor() { }

  ngOnInit(): void {
  }
  accchange(event:any){
    //console.log(event.target.value)
    this.acno=event.target.value
    
  }
  pswdchange(event:any){
    this.pswd=event.target.value
  }

  login(){
    var acno=this.acno;
    var pswd=this.pswd;
    let accDetails=this.user;
    if(acno in accDetails){
      if(pswd==accDetails[acno]["password"]){
        alert("Login successful")
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
