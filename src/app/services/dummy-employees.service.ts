import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DummyEmployeesService {

    // http://dummy.restapiexample.com/
    
    private dummyEmployeesApiUrl: string = 'http://dummy.restapiexample.com/api/v1';
    
    constructor(
        private http: HttpClient
    ) { }

    public getAllEmployees(): Observable<any> {
        return this.http.get<any>(`${this.dummyEmployeesApiUrl}/employees`);
    }

    public getEmployeeExtendedData(employeeID: string): Observable<any> {
        return this.http.get<any>(`${this.dummyEmployeesApiUrl}/employee/${employeeID}`);
    }

    public createEmployee(employee: any): Observable<any> {
        return this.http.post<any>(`${this.dummyEmployeesApiUrl}/create`, employee);
    }

    public updateEmployee(employeeID: string, employee: any): Observable<any> {
        return this.http.put<any>(`${this.dummyEmployeesApiUrl}/update/${employeeID}`, employee);
    }

    public deleteEmployee(employeeID: any): Observable<any> {
        return this.http.delete<any>(`${this.dummyEmployeesApiUrl}/delete/${employeeID}`);
    }

}
