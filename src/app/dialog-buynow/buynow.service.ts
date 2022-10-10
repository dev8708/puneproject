import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BuynowService {
data:any;
public showlist = new BehaviorSubject<any>(null);
productList:any=[];
datalist:any=[];
  constructor() { }

onsetdata(value:any){
// this.data = value;
this.productList.push(value);
console.log("service",this.productList)
this.productList.forEach((element: any) => {
  console.log("Elemt",element)
  
});
  this.showlist.next(this.productList)
}
ongetdata(): Observable<any>{
  // return this.data=value;
  return this.showlist.asObservable();
}
}
