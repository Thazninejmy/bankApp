import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Properties
  // string Interpolation
  aim = "perfect banking partner"
  accno = "Enter Account Number"
  acno = ""
  pswd = ""
//form group
   loginForm =this.lg.group({
    acno : ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
   })

  // dependency injection
  constructor(private router: Router,private ds:DataService,private lg:FormBuilder) { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);

  }

  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);

  }


  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    const result = this.ds.login(acno,pswd)
    if (this.loginForm.valid) {
      if(result){
        alert("login successfull")
        this.router.navigateByUrl('dashboard')
  
      }
    }
    else{
      alert("Invalid Form")
    }



  }

  // login(acno:any,pswd:any) {
  //   var acno = acno.value
  //   var pswd = pswd.value
  //   let db = this.db

  //   if (acno in db) {
  //     if (pswd == db[acno]["password"]) {
  //       alert("login successfull")
  //     }
  //     else {
  //       alert("incorrect password")
  //     }
  //   }
  // else {
  //     alert("user does not exist!!!!!")
  //   }



  // }


}
