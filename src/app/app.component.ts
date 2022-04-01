import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'fetchapis';
  apidata:any = {};
  postdata:any={};
  constructor(private serviceName: MyserviceService){
     
  }
  ngOnInit():void{
    this.getNamedata();
  }
  getNamedata(){
    this.serviceName.getData().subscribe((response)=>{
    console.log(response);
    this.apidata = response.data;
    })
  }
  postNamedata(){
    const a ={
    message :String,
    contact :String
    }
    this.serviceName.postData(a).subscribe((response)=>{
    console.log(response);
    this.postdata = response.a;
    })
  }
}
