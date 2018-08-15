import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  datafromservice:any;

  constructor(private httpclient:HttpClient) {
    this.setdata();
  }

  private _resturl:string ="http://localhost:8080/getAppDetailList";
  private _localdata:string ="src/app/data/widgetmap.json";
    
 setdata(){
   this.getAppDataFromService().subscribe((data)=>{
     this.datafromservice = data;
     console.log("setdata init from service>"+data);
   });
 }

  getAppDataFromService(){   
    //return this.httpclient.get(this._localdata);
    return this.httpclient.get(this._resturl);
    //  this.httpclient.get(this._resturl).subscribe((data)=>{
    //    this.datafromservice =data;
    //  });
  }

  

}
