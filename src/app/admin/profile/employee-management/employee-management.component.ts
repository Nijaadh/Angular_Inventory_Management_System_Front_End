import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss'
})
export class EmployeeManagementComponent implements OnInit {


  
public isHiddenAddEmployeeContainer:boolean=false;
public employee: Employee = {} as Employee;

public employees:Employee[]=[];


empID:String="EMP-001";
empFName:String="";
empLName:String="";
empNic:String="";
empGender:String="";
empGmail:String="";
empDOB:String="";
empContactNo:String="";
empEMGContactNo:String="";
empAddress:String="";
empUserName:String="";
empUserRole:String="";
empPassword:String="";
empConformPassword:String="";



  constructor(private employeeService:EmployeeService){

  }

  ngOnInit(): void {
    this.isHiddenAddEmployeeContainer=true;
    this.employees.push(this.employeeService.getEmployee());
    
  }




  showANDhideAddEmployeeContainer():void{
    if(this.isHiddenAddEmployeeContainer==true){
      this.isHiddenAddEmployeeContainer=false;
    }
    else if(this.isHiddenAddEmployeeContainer==false){
      this.isHiddenAddEmployeeContainer=true;
    }

   
  }

  clearFeilds():void{




  }


  onGenderChange(selectedGender: string): void {
    this.empGender = selectedGender;
  }

}
