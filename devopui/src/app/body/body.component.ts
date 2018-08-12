import { Component, OnInit } from '@angular/core';
import { DataService } from '../myservice/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public datalist;

  constructor(public dataservice:DataService) { }

  ngOnInit() {
    this.getDataFromService();
  
  }

  clickfun(){
    console.log("click fun>"+this.dataservice.datafromservice);
  }
  getDataFromService(){
     this.datalist = this.dataservice.getAppDataFromService().
    subscribe((data)=>{
    this.datalist=data;
    });
  
}



}