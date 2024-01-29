import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrl: './registor.component.css'
})
export class RegistorComponent implements OnInit{
  constructor(public _dataservice:DataServiceService,public router:Router){}
   ngOnInit(): void {
       
     }
  signUp(){
    this._dataservice.userArray.push(this._dataservice.signUpObj);
     // console.log(this.userArray);
    localStorage.setItem("user",JSON.stringify(this._dataservice.userArray));
    this._dataservice.curr_role = this._dataservice.signUpObj.role;
    console.log(this._dataservice.curr_role);
    //  console.log(this._dataservice.signUpObj);
     this._dataservice.signUpObj= {
       UserName:'',
       password:'',
       role:'',
    };
    this.router.navigate(['login']);
    // console.log(this._dataservice.signUpObj.role);
    // this.router.navigate(['/login']);

   }
}
