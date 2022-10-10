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
  // array1:any=[];
 
  
  displayedColumns: string[] = ['productname','quantity','price','order_total','action'];//***************mat-table */
  dataSource = new MatTableDataSource<videolist>(this.finalvideolistdata);

    // @ViewChild('grid') grid: MatGridList;

  // gridByBreakpoint = {
  //   xl : 8,
  //   lg: 6,
  //   md: 4,
  //   sm: 2,
  //   xs: 1
  // }
  myForm!: FormGroup;
  arr!: FormArray;
  ratio = '4:1';

  constructor(
    private service:BuynowService,
    private sanitizer:DomSanitizer,
    // private observableMedia: ObservableMedia,
        public dialog: MatDialog,
       private fb: FormBuilder,
  )
    // changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) 
    {
  
  }
 
  ngOnInit() :void {
    this.myForm = this.fb.group({
      // arr: this.fb.array([this.createItem()]),
      // image:['',Validators.required],
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

    // this.list=[];
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
    // this.finalvideolistdata=obj
    this.finalvideolistdata.push(obj)
    console.log("obect",this.finalvideolistdata);

    this.finalvideolistdata.forEach((element:any) => {
      console.log("main",element)
    //   this.array1=element;
      
    });
    // this.finalvideolistdata=this.array1;
    console.log("obect",this.finalvideolistdata);
  
  
    
  }
  // addItem() {
  //   debugger
  //   this.arr = this.myForm.get('arr') as FormArray;
  //   this.arr.push(this.createItem());
  // }


  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBuynowComponent, {
      
      // width: '250px',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

// getControls(){
//   return (this.myForm.get('arr')as FormArray).controls;
// }

// folders = [
//   { name: 'Folder 1', link: '#1' },
//   { name: 'Folder 2', link: '#2' },
//   { name: 'Folder 3', link: '#3' },
//   { name: 'Folder 4', link: '#4' },
//   { name: 'Folder 5', link: '#5' }
// ];

responsive = true;
cols = 1;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
}
