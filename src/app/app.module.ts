import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Compo/login/login.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { BranchComponent } from './branch/branch.component';
import { RegistorComponent } from './compo/registor/registor.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyComponent,
    EmployeeComponent,
    BranchComponent,
    RegistorComponent,
    HomeComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
