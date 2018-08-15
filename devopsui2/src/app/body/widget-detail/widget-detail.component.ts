import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../myservice/data.service';
import { BodyComponent } from 'src/app/body/body.component';
import { DatastoreService } from '../../myservice/datastore.service';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent  implements OnInit {

datalist:any;

  constructor(private route: ActivatedRoute,private dataservice:DataService) { 
    
  }

  param:any;
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.param =params.widgetname;
      console.log(this.param);
      
    });

    this.datalist = this.dataservice.datafromservice;

/* if datalist is undefined...call the service directly... */
if(this.datalist==undefined){
  this.dataservice.getAppDataFromService().subscribe((dataresp)=>{
    this.datalist = dataresp;
  }

  );
}
    
  console.log("init>"+this.datalist)  

  }

}
