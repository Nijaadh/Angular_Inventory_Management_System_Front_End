import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8080/api/v1/employeeManagement/getAllEmployees"
  constructor(private httpClient: HttpClient) {

   }

//  getEmployeeList(): Observable<Employee[]>{
//   return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
//  }

getEmployeeList(): Observable<Employee[]> {
  return this.httpClient.get<any>(this.baseUrl).pipe(
    map (response => {
      const payload = response.payload[0]; // Extract the array of employees from the payload
      return payload.map((emp: any) => {
        return {
          empId: emp.empId,
          empFName: emp.empFName,
          empLName: emp.empLstName,
          empNIC: emp.empNIC,
          empGender: emp.empGender,
          empDOB: emp.empDOB,
          empEmail: emp.empEmail,
          empAddress: emp.empAddress,
          empContactNo: emp.empContactNo,
          empEmgContactNo: emp.empEmgContactNo,
          empUserName: emp.empUserName,
          empPassword: emp.empPassword,
          empCommonStatus: emp.empCommonStatus,
          empRegisterdDate: emp.empRegisterdDate,
          empLstUpdatedDated: emp.empLstUpdatedDated,
          empRoleId: emp.empRoleId
        };
      });
    })
  );
}

}
