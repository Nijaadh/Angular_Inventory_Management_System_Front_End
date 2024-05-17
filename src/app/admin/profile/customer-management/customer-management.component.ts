import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer.model';


@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.scss'
})
export class CustomerManagementComponent implements OnInit{

  public isHiddenAddCustomerContainer: boolean = false;

  public empLastEmployeeId: String | undefined="000";

  public customers: Customer[] = [];

  cusID: String | undefined = this.empLastEmployeeId;
  cusFName: String = "";
  cusLName: String = "";
  cusNic: String = "";
  cusGender: String = "";
  cusGmail: String = "";
  cusDOB: String = "";
  cusContactNo: String = "";
  cusEMGContactNo: String = "";
  cusAddress: String = "";
  cusUserName: String = "";
  cusUserRole: String = "";
  cusPassword: String = "";
  cusConformPassword: String = "";
  
  constructor(){

  }

  ngOnInit(): void {
    


    this.isHiddenAddCustomerContainer = true;
    //this.getEmployeeList();

    this.customers = [
      {
        cusId: "CUS-001",
        cusFName: "Mohomed",
        cusLName: "Nijaadh",
        cusNic: "200021701711",
        cusGender: "Male",
        cusGmail: "mohomednijaadh.net@gmail.com",
        cusDOB: "2000.08.04",
        cusContactNo: "0774411765",
        cusEMGContactNo: "0771234567",
        cusAddress: "No.61/29 Kandy rd. Thihariya, Kalagedihena",
        cusUserName: "maku",
        cusPassword: "Nijaadh20#",
        cusCommonStatus: "ACTIVE",
        cusRoleId: "Admin",
        cusRegDate: "2024.05.15",
        cusUpdDate: "2024.05.15"

      },
      {

        cusId: "CUS-002",
        cusFName: "Zeenathul",
        cusLName: "Fahira",
        cusNic: "199911601622",
        cusGender: "Female",
        cusGmail: "zeenathulfahira.net@gmail.com",
        cusDOB: "1999.04.20",
        cusContactNo: "0774411765",
        cusEMGContactNo: "0774411765",
        cusAddress: "No. 255 mount rd. lavania, canada",
        cusUserName: "zeena",
        cusPassword: "Zeena19*",
        cusCommonStatus: "INACTIVE",
        cusRoleId: "Manager",
        cusRegDate: "2024.05.15",
        cusUpdDate: "2024.05.15"


      }
    ]

  }


  showANDhideAddCustomerContainer(): void {
    if (this.isHiddenAddCustomerContainer == true) {
      this.isHiddenAddCustomerContainer = false;
    }
    else if (this.isHiddenAddCustomerContainer == false) {
      this.isHiddenAddCustomerContainer = true;
    }


  }


  onGenderChange(selectedGender: string): void {
    this.cusGender = selectedGender;
  }


}
