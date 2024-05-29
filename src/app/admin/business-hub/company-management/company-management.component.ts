import { Component, OnInit } from '@angular/core';
import { Company } from './Models/company.model';
import { CompanyService } from './Services/company.service';
import { CommonResponse } from './Models/commonResponse';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.scss']
})
export class CompanyManagementComponent implements OnInit {
 
  public isHiddenAddCompanyContainer: boolean = false;
  public company: Company[] = [];
  public newCompany: Company = {
    comId: 0,
    comName: 'ew',
    hotline: '333',
    gmail: 'gfgfgfg',
    address: 'dfdf',
    commonStatus: 'ACTIVE'
  };
  public companyIdToUpdate: number | undefined;
  public companyIdToDelete: number | undefined;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.isHiddenAddCompanyContainer = true;
    this.getAllCompanies();
    
  }

  getAllCompanies(): void {
    this.companyService.getAllCompanies()
      .subscribe(
        (response: CommonResponse) => {
          if (response.status) {
            this.company = response.payload;
          } else {
            console.error('Error fetching companies:', response.commonMessage);
          }
        },
        (error: any) => {
          console.error('Error fetching companies:', error);
        }
      );
  }

  // public showANDhideAddCompanyContainer(): void {
  //   this.isHiddenAddCompanyContainer = !this.isHiddenAddCompanyContainer;
  // }

//  showANDhideAddCompanyContainer() {
//     this.isHiddenAddCompanyContainer = !this.isHiddenAddCompanyContainer;
//   }


  showANDhideAddCompanyContainer(): void {
    if (this.isHiddenAddCompanyContainer == true) {
      this.isHiddenAddCompanyContainer = false;
    }
    else if (this.isHiddenAddCompanyContainer == false) {
      this.isHiddenAddCompanyContainer = true;
    }


  }

  saveCompany(): void {
    this.companyService.saveCompany(this.newCompany)
      .subscribe(
        (response: CommonResponse) => {
          if (response.status) {
            this.getAllCompanies();
            console.log('Company saved successfully.');
          } else {
            console.error('Error saving company:', response.commonMessage);
          }
        },
        (error: any) => {
          console.error('Error saving company:', error);
        }
      );
  }

  updateCompany(): void {
    if (this.companyIdToUpdate) {
      this.companyService.updateCompany(this.newCompany)
        .subscribe(
          (response: CommonResponse) => {
            if (response.status) {
              this.getAllCompanies();
              console.log('Company updated successfully.');
            } else {
              console.error('Error updating company:', response.commonMessage);
            }
          },
          (error: any) => {
            console.error('Error updating company:', error);
          }
        );
    } else {
      console.error('No company ID specified for updating.');
    }
  }

  deleteCompany(): void {
    if (this.companyIdToDelete) {
      this.companyService.deleteCompany(this.companyIdToDelete)
        .subscribe(
          (response: CommonResponse) => {
            if (response.status) {
              this.getAllCompanies();
              console.log('Company deleted successfully.');
            } else {
              console.error('Error deleting company:', response.commonMessage);
            }
          },
          (error: any) => {
            console.error('Error deleting company:', error);
          }
        );
    } else {
      console.error('No company ID specified for deletion.');
    }
  }

  getCompanyById(companyId: number): void {
    this.companyService.getCompany(companyId)
      .subscribe(
        (response: CommonResponse) => {
          if (response.status) {
            // Handle the company data as needed
            console.log('Company:', response.payload);
          } else {
            console.error('Error fetching company by ID:', response.commonMessage);
          }
        },
        (error: any) => {
          console.error('Error fetching company by ID:', error);
        }
      );
  }

  onGenderChange(selectedGender: string): void {
    // Implement as needed
  }

  // showANDhideAddCompanyContainer(): void {
  //   if (this.isHiddenAddCompanyContainer == true) {
  //     this.isHiddenAddCompanyContainer = false;
  //   } else if (this.isHiddenAddCompanyContainer == false) {
  //     this.isHiddenAddCompanyContainer = true;
  //   }
  // }
  
}
