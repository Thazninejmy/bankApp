import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//Database

  db: any = {
    1000: { "accno": 1000, "username": "anu", "password": 1000, "balance": 8000 },
    1001: { "accno": 1001, "username": "ann", "password": 1001, "balance": 9000 },
    1002: { "accno": 1002, "username": "balu", "password": 1002, "balance": 8500 },
    1003: { "accno": 1003, "username": "vinu", "password": 1003, "balance": 7500 },
    1004: { "accno": 1004, "username": "manu", "password": 1004, "balance": 8500 },

  }


  constructor() { }

  login(acno:any,pswd:any) {
    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        return true

      }
      else {
        alert("incorrect password")
        return false
      }
    }
  else {
      alert("user does not exist!!!!!")
      return false
    }
  }
  // register
  register(username:any,acno:any,password:any){
    let db=this.db
    if(acno in db){
      return false
    }
    else{
      // insert in db
      db[acno]={
        acno,
        username,
        password,
        "balance":0
      }
      return true
    }
  }


// deposit
deposit(acno:any,password:any,amt:any){

  var amount=parseInt(amt)
  let db=this.db

  if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else{
        alert("incorrect password")
        return false
      }
  }
  else{
    alert("user doesnot exist!!!!")
    return false
  }
}

//Withdraw

withdraw(acno:any,password:any,amt:any){
  var amount=parseInt(amt)
  let db=this.db

  if(acno in db){
    if(password==db[acno]["password"]){
    if(amount<db[acno]["balance"]){
      db[acno]["balance"]-=amount
      return db[acno]["balance"]
    }
    else{
      alert("Insufficent Balance!!!")
      return false
    }
    }
    else{
      alert("incorrect password!!!!")
      return false
    }

  }
  else{
    alert("user doesnot exist")
    return false
  }

}
}

