import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  userArray:any = [];
  curr_role:string = ''; 
  deletflag:boolean = false;
  editflag:boolean = false;
  signUpObj:any = {
     UserName:'',
     password:'',
     role:'',
  };
  loginObj:any = {
    UserName:'',
    password:'',
  }
 
}
