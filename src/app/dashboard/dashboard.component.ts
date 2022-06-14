import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   acno=""
   pswd=""
   amount=""

   acno1=""
   pswd1=""
   amount1=""
//form group
depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9 ]*')]]
})
withdrawForm=this.fb.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9 ]*')]]
})
user:any
lDate:any
accno=""
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUser
    this.lDate=new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("Please login")
      this.router.navigateByUrl("")
    }
  }
    deposit(){
      var acno=this.depositForm.value.acno
      var password=this.depositForm.value.pswd
      var amount=this.depositForm.value.amount

     const result= this.ds.deposit(acno,password,amount)
     if(this.depositForm.valid){
      if(result){
        alert(amount+"deposited successfully and new balance is "+result)
     }
     }
     else{
       alert("Invalid Form")
     }
     

    }
    withdraw(){
      var acno=this.withdrawForm.value.acno1
      var password=this.withdrawForm.value.pswd1
      var amount=this.withdrawForm.value.amount1

      const result= this.ds.withdraw(acno,password,amount)
      if(this.withdrawForm.valid){
        if(result){
          alert(amount+"debited successfully and new balance is "+result)
        }
      }
      else{
        alert("Invalid Form")
      }
    }

logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")

 this.router.navigateByUrl("") 
}
   deleteAccount(){
   this.accno=JSON.parse(localStorage.getItem("currentAcno")|| '')

   }   
   cancel(){
     this.accno=""
   }
}
