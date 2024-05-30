import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonResponse } from '../Models/commonResponse';
import { Company } from '../Models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8080/api/v1/companyManagement'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  saveCompany(companyDTO: Company): Observable<CommonResponse> {
  
      return this.http.post<CommonResponse>(`${this.apiUrl}/saveCompany`, companyDTO);
 
  }

  updateCompany(companyDTO: Company): Observable<CommonResponse> {
    return this.http.put<CommonResponse>(`${this.apiUrl}/updateCompany`, companyDTO)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCompany(companyId: number): Observable<CommonResponse> {
    return this.http.delete<CommonResponse>(`${this.apiUrl}/deleteCompany/${companyId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllCompanies(): Observable<CommonResponse> {
    return this.http.get<CommonResponse>(`${this.apiUrl}/getAllCompanies`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCompany(companyId: number): Observable<CommonResponse> {
    return this.http.get<CommonResponse>(`${this.apiUrl}/getCompany/${companyId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
