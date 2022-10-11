import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormArray, Validators, FormGroup } from "@angular/forms";
import { BuynowService } from './buynow.service';

@Component({
  selector: 'app-dialog-buynow',
  templateUrl: './dialog-buynow.component.html',
  styleUrls: ['./dialog-buynow.component.scss']
})
export class DialogBuynowComponent implements OnInit {
  size = 300*341.35;
  fileToUpload: any;
  imageUrl: any;
  fileName!: string;
  file!: File;
  size_limit :boolean =false;
  array:any=[];
  
  @ViewChild('fileInput', { static: false })
  el!: ElementRef;
  buynowform!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogBuynowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private service:BuynowService
    ) { 
     
    }
    
  ngOnInit(): void {
    this.buynowform = this.fb.group({
      image:['',Validators.required],
      product:['',Validators.required],
      price:['',Validators.required]

    })
  }

  handleFileInput(file: FileList) 
  {      console.log(file,'test image');
if(file[0].size>this.size){
  !file[0].name;
}
    this.fileToUpload = file.item(0);

    let reader = new FileReader();

    reader.onload = (event: any) => {
      // this.imageUrl = event.target.result;
      console.log(event.total,'test image');
      if(this.size<event.total){//5mb //100kb
           alert(event.total+"file not be 100kb");
          //  this.size_limit =true;
       }
       else if (this.size>event.total){
          // reader.readAsDataURL(this.fileToUpload);

        alert("successfully upload");
               this.imageUrl = event.target.result;

        
        // this.size_limit =false;
        // reader.readAsDataURL(this.fileToUpload);

        // this.imageUrl;
       }
      
    };
  
if(this.size_limit==true){
alert("lotfan size kamtar entekhab konid");
// reader.readAsDataURL(this.fileToUpload);

    }
    else {
 reader.readAsDataURL(this.fileToUpload);
    }
  }  
  addproduct(){
    let payload={
      image:this.buynowform.value.image,
      product:this.buynowform.value.product,
      price:this.buynowform.value.price
    }
    console.log("final ", payload)
    this.array.push(payload)
    console.log("array data",this.array)
    this.service.onsetdata(this.array);
    this.dialogRef.close();
  }
}
