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

  public empLastEmployeeId: String | undefined="000";

  public employees: Employee[] = [];


  empID: String | undefined = this.empLastEmployeeId;
  empFName: String = "";
  empLName: String = "";
  empNic: String = "";
  empGender: String = "";
  empGmail: String = "";
  empDOB: String = "";
  empContactNo: String = "";
  empEMGContactNo: String = "";
  empAddress: String = "";
  empUserName: String = "";
  empUserRole: String = "";
  empPassword: String = "";
  empConformPassword: String = "";



  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.isHiddenAddEmployeeContainer = true;
    this.getEmployeeList();

    // this.employees = [
    //   {
    //     empId: "EMP-001",
    //     empFName: "Mohomed",
    //     empLName: "Nijaadh",
    //     empNic: "200021701711",
    //     empGender: "Male",
    //     empGmail: "mohomednijaadh.net@gmail.com",
    //     empDOB: "2000.08.04",
    //     empContactNo: "0774411765",
    //     empEMGContactNo: "0771234567",
    //     empAddress: "No.61/29 Kandy rd. Thihariya, Kalagedihena",
    //     empUserName: "maku",
    //     empPassword: "Nijaadh20#",
    //     empCommonStatus: "ACTIVE",
    //     empRoleId: "Admin",
    //     empRegDate: "2024.05.15",
    //     empUpdDate: "2024.05.15"

    //   },
    //   {

    //     empId: "EMP-002",
    //     empFName: "Zeenathul",
    //     empLName: "Fahira",
    //     empNic: "199911601622",
    //     empGender: "Female",
    //     empGmail: "zeenathulfahira.net@gmail.com",
    //     empDOB: "1999.04.20",
    //     empContactNo: "0774411765",
    //     empEMGContactNo: "0774411765",
    //     empAddress: "No. 255 mount rd. lavania, canada",
    //     empUserName: "zeena",
    //     empPassword: "Zeena19*",
    //     empCommonStatus: "INACTIVE",
    //     empRoleId: "Manager",
    //     empRegDate: "2024.05.15",
    //     empUpdDate: "2024.05.15"


    //   }
    // ]

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


  onGenderChange(selectedGender: string): void {
    this.empGender = selectedGender;
  }


  private getEmployeeList(): void {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
      console.log('Employees:', this.employees);
      
      if (this.employees.length > 0) {
        this.empLastEmployeeId = this.employees[this.employees.length - 1].empId;
        console.log("id"+this.empLastEmployeeId)
      }// Log the retrieved employees to check if data is received
    });

    

  }
  empLastEmployeeID="EMP-003"
  getNewEmployeeID(empLastEmployeeID:string):String{
    const id = empLastEmployeeID.replace(/\D/g, '');
    const newId=parseInt(id)+1;
    const newEmpId="EMP-"+newId;
    return newEmpId;
  }

  new=this.getNewEmployeeID(this.empLastEmployeeID)
  
}
