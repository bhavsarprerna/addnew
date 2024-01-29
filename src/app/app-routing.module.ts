import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Compo/login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { RegistorComponent } from './compo/registor/registor.component'; 
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {path:'',component:RegistorComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent , children:[
    {path:'employee',component:EmployeeComponent},
    // {path:'employee/:id',component:UpdateComponent},
    {path:'company',component:CompanyComponent},
    {path:'branch',component:BranchComponent},
  ]
} ,

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
