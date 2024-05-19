import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss'
})
export class EmployeeManagementComponent implements OnInit {
  
  public isHiddenAddEmployeeContainer: boolean = false;

  // employees:Employee[]=[];
  employee:Employee={
    empId:'3',
    empFName:'',
    empLName:'',
    empNic:'',
    empGender:'Male',
    empGmail:'',
    empDOB:'',
    empContactNo:'',
    empEMGContactNo:'',
    empAddress:'',
    empUserName:'',
    empPassword:'',
    empConPassword:'',
    empImage:'',
    // empImageFile:undefined,
    empCommonStatus:'ACTIVE',
    empRoleId:''

  }

empImageFile:any;

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.isHiddenAddEmployeeContainer = true;
  

  }




  showANDhideAddEmployeeContainer(): void {
    if (this.isHiddenAddEmployeeContainer == true) {
      this.isHiddenAddEmployeeContainer = false;
    }
    else if (this.isHiddenAddEmployeeContainer == false) {
      this.isHiddenAddEmployeeContainer = true;
    }


  }

  clearFeilds(): void {

  }

  onSubmit(){
    console.log(this.employee)

    this.employeeService.saveEmp(this.employee, this.empImageFile).subscribe(
      (data:any) =>{
        console.log(data);
      }
    );
  }

  onImgSelect(event: any):void{
    const file = event.target.files[0];
    this.empImageFile = file;
    console.log("image selected"+this.empImageFile)
  }

  


  
  
}
