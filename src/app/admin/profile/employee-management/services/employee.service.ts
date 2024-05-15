import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

 private employee:Employee={
empID:"EMP-001",
empFName:"Mohomed",
empLName:"Nijaadh",
empNic:"200021701711",
empGender:"Male",
empGmail:"mohomednijaadh.net@gmail.com",
empDOB:"2000.08.04",
empContactNo:"0774411765",
empEMGContactNo:"0771234567",
empAddress:"No.61/29 Kandy rd. Thihariya, Kalagedihena",
empUserName:"maku",
empUserRole:"Admin",
empPassword:"Nijaadh20#",
empCommonStatus:"ACTIVE"

 };

 public setEmployee(empID:String,empFName:String,empLName:String,empNic:String,empGender:String,empGmail:String,empDOB:String,empContactNo:String,empEMGContactNo:String,empAddress:String,empUserName:String,empUserRole:String,empPassword:String):Employee{
  this.employee.empID=empID;
  this.employee.empFName=empFName;
  this.employee.empLName=empLName;
  this.employee.empNic=empNic;
  this.employee.empGender=empGender;
  this.employee.empGmail=empGmail;
  this.employee.empDOB=empDOB;
  this.employee.empContactNo=empContactNo;
  this.employee.empEMGContactNo=empEMGContactNo;
  this.employee.empAddress=empAddress;
  this.employee.empUserName=empUserName;
  this.employee.empUserRole=empUserRole;
  this.employee.empPassword=empPassword;
  return this.employee;
 }

 public getEmployee():Employee{
  return this.employee;
 }
}
