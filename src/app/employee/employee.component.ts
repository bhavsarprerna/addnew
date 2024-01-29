import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  trueflag: any;
  flaseflag: any
  edit123: boolean = false;
  delete123: boolean = false;

  constructor(public _DataServiceService: DataServiceService) {
  }
  ngOnInit(): void {
    this.delete123 = this._DataServiceService.deletflag;
    this.edit123 = this._DataServiceService.editflag;
  }

  tableData = [
    { id: 1, name: 'Prerna', isEdit: false },
    { id: 2, name: 'Sneha', isEdit: false },
    { id: 3, name: 'Roshni', isEdit: false },
    { id: 4, name: 'Ilesh', isEdit: false },
    { id: 5, name: 'Ishant', isEdit: false },
    { id: 6, name: 'Harsh', isEdit: false }

  ];

  deleteRow(index: number): void {
    this.tableData.splice(index, 1);
  }
  EditRow(rowdata: any): void {
    rowdata.isEdit = true;
  }
  saveRow(rowdata: any) {
    let data = this.tableData.find(x => x.id === rowdata.id)
    data = rowdata;
    data!.isEdit = false;
  }
  // shouldShowEditButton(row: any): boolean {
  //   return this.edit123 && (row.isEdit || !this.edit123);
  // }

  // trackByFn(index: number, item: any): any {
  //   return index; // or item.id if you have a unique identifier
  // }
  // toggleEdit(row: any) {
  //   row.isEdit = !row.isEdit;
  //   if (!row.isEdit) {
  //     this.saveRow(row);
  //     // If you want to save changes immediately after editing, you can call the saveRow(row) method here.
  //   }
  }


