import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
url: any = environment.baseUrl;
  // api = "/employees"
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(this.url + 'employees',)
  }

  // postapi = "http://dummy.restapiexample.com/api/v1/create"

  postData(emp_data:any){
    return this.http.post<any>(this.url + 'create',emp_data)
  }
}
