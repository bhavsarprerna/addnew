import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  signUpObj: any;
  
  constructor(public _dataservice:DataServiceService,public router:Router){}
  ngOnInit(): void {
    const localData = localStorage.getItem("user");
    if(localData!=null){
      this._dataservice.userArray = JSON.parse(localData);
    }
  }
  
  login(){
    const isUserExist = this._dataservice.userArray.find((m: { UserName: string, password: string }) => 
    m.UserName == this._dataservice.loginObj.UserName && m.password == this._dataservice.loginObj.password);
    if(isUserExist!= undefined){
      alert("user found successfully");
      this.router.navigate(['home']);
       console.log(this._dataservice.curr_role);
       if(this._dataservice.curr_role==='SuperAdmin')
       {
        this._dataservice.deletflag = true;
        this._dataservice.editflag = true;
        console.log(this._dataservice.deletflag);
        console.log(this._dataservice.editflag);
       }
       else if(this._dataservice.curr_role === 'Admin'){
           this._dataservice.editflag = true;
       }
    }
    else{
      alert("wrong data");
    }


   }

}
