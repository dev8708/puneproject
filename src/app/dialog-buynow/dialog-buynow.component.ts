import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormArray, Validators, FormGroup } from "@angular/forms";
import { BuynowService } from './buynow.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-buynow',
  templateUrl: './dialog-buynow.component.html',
  styleUrls: ['./dialog-buynow.component.scss']
})
export class DialogBuynowComponent implements OnInit {
  size = 300*341.35;
  fileToUpload: any;
  imageUrl: any;
  file!: File;
  size_limit :boolean =false;
  array:any=[];
  @ViewChild('imageFile') myIputVariable!:ElementRef;
  el!: ElementRef;
  buynowform!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogBuynowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private service:BuynowService,
    private sanitizer:DomSanitizer,

    ) { 
     
    }
    
  ngOnInit(): void {
    this.buynowform = this.fb.group({
      image:['',Validators.required],
      product:['',Validators.required],
      price:['',Validators.required]

    })
  }

  handleFileInput(event:any) { 
     console.log(event[0].name,'test image');
    this.fileToUpload = event.item(0);
    console.log("nnn",this.fileToUpload)
    let reader = new FileReader();
    reader.onload = (event: any) => {
      console.log(event,'test image');
      if(this.size<event.total){//5mb //100kb
        console.log("vvv",this.fileToUpload.name)
      alert(this.size+" 100kb Maximum size");
      this.myIputVariable.nativeElement.value="";
            this.size_limit =true;
          }
       else if (this.size>event.total){
       alert("successfully upload");
          this.imageUrl = event.target.result;
          console.log(this.imageUrl,'test image');
       }   
    };
 reader.readAsDataURL(this.fileToUpload);
    }
  addproduct(){
    let payload={
      image: this.imageUrl,
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
