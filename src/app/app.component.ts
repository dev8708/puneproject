import {ChangeDetectorRef, Component, Inject,OnInit, ViewChild,AfterContentInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogBuynowComponent } from './dialog-buynow/dialog-buynow.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuynowService } from './dialog-buynow/buynow.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { yearsPerPage } from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';

interface videolist { //************* interface***************************
  productname: string;
  quantity : any;
  price:any,
  order_total : any;
  action : string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'punepro';
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  data:any;
  list:any=[];
  finalvideolistdata:any = [];
 
  
  displayedColumns: string[] = ['productname','quantity','price','order_total','action'];//***************mat-table */
  dataSource = new MatTableDataSource<videolist>(this.finalvideolistdata);


  myForm!: FormGroup;
  arr!: FormArray;
  ratio = '4:1';

  constructor(
    private service:BuynowService,
    private sanitizer:DomSanitizer,
        public dialog: MatDialog,
        private fb: FormBuilder,
  )
    { }
  ngOnInit() :void {
    this.myForm = this.fb.group({
      product:['',Validators.required],
      price:['',Validators.required],
    })
    this.service.ongetdata().subscribe(res=>{
      if(res){
      console.log("data in ",res)
      this.data=res;
      console.log("datain the",this.data)
      this.data.forEach((element:any) => {
        console.log("finaldataon",element)
        element.forEach((el:any) => {
          console.log("finaldataon",el)
          this.data=el;          
        });        
      });     
      console.log("datain rounr",this.data)
   let obj={
      image:this.data.image,
      product:this.data.product,
      price:this.data.price,
    }
    console.log("main tee",obj);
    this.list.push(obj);
    console.log("main tee234",obj);
      }
    })
  }
  createItem() {
    return this.fb.group({
      name: [''],
      pay: ['']
    })
  }
  counterValue = 1;
  get counter() {
    return this.counterValue + 0;
  }
  set counter(value) {
    this.counterValue = value;
  }
  decrement() {
    if(this.counter >1){
this.counter--;
    }
 }
  increment() {
    this.counter++;
  }
  Addbag(){
    let obj={
              productname:this.data.product,
              quantity:this.counter,
              price:this.data.price,
              order_total:this.counter,
              action:true
  
       }
    console.log("obect",obj);
    this.finalvideolistdata.push(obj)
    console.log("obect",this.finalvideolistdata);

    this.finalvideolistdata.forEach((element:any) => {
      console.log("main",element)
      
    });
    console.log("obect",this.finalvideolistdata);  
  }
  ngOnDestroy(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBuynowComponent, {  
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
responsive = true;
cols = 1;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));  
}
