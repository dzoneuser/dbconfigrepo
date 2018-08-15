import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }


 
}
