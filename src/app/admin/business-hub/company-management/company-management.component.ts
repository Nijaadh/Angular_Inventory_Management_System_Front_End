import { Component, OnInit } from '@angular/core';
import { Company } from './Models/company.model';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrl: './company-management.component.scss'
})
export class CompanyManagementComponent implements OnInit{
 
  public isHiddenAddCompanyContainer: boolean = false;

  public comLastEmployeeId: String | undefined="000";

  public company:Company[]=[];

  comID: String | undefined = this.comLastEmployeeId;
  comFName: String = "";
  comLName: String = "";
  comNic: String = "";
  comGender: String = "";
  comGmail: String = "";
  comDOB: String = "";
  comContactNo: String = "";
  comEMGContactNo: String = "";
  comAddress: String = "";
  comUserName: String = "";
  comUserRole: String = "";
  comPassword: String = "";
  comConformPassword: String = "";
  
  constructor(){

  }

  ngOnInit(): void {
    


    this.isHiddenAddCompanyContainer = true;
    //this.getEmployeeList();

    this.company = [
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


  showANDhideAddComapnyContainer(): void {
    if (this.isHiddenAddCompanyContainer == true) {
      this.isHiddenAddCompanyContainer = false;
    }
    else if (this.isHiddenAddCompanyContainer == false) {
      this.isHiddenAddCompanyContainer = true;
    }


  }


  onGenderChange(selectedGender: string): void {
    this.comGender = selectedGender;
  }
  

}
