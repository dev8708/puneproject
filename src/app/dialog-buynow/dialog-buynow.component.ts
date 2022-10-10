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
  size = 1024*1024;
  fileToUpload: any;
  imageUrl: any;
  fileName!: string;
  file!: File;
  size_limit :boolean =false
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
  
   
    // @ViewChild('fileInput')el:ElementRef;
    // imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    // editFile: boolean = true;
    // removeUpload: boolean = false;
    // size = 1024*1024;
    // fileToUpload: any;
    // imageUrl: any;
    // fileName: string;
    // file: File;
    // size_limit :boolean =false;
    
  ngOnInit(): void {
    this.buynowform = this.fb.group({
      image:['',Validators.required],
      product:['',Validators.required],
      price:['',Validators.required]


    })
 
  }
  // uploadFile(event:any) {
  //   let reader = new FileReader(); // HTML5 FileReader API
  //   let file = event.target.files[0];
  //   if (event.target.files && event.target.files[0]) {
  //     reader.readAsDataURL(file);

  //     // When file uploads set it to file formcontrol
  //     reader.onload = () => {
  //       this.imageUrl = reader.result;
  //       this.buynowform.patchValue({
  //         file: reader.result
  //       });
  //       this.editFile = false;
  //       this.removeUpload = true;
  //     }
  //     // ChangeDetectorRef since file is loading outside the zone
  //     this.cd.markForCheck();        
  //   }
  // }

  // Function to remove uploaded file
  handleFileInput(file: FileList) 
  {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      console.log('test image');
      if(this.size>1000000){//5mb //100kb
           alert(this.size+"file not be 100kb");
           //boolean true
           this.size_limit =true;

       }
       else if (this.size<1000000){
        // reader.readAsDataURL(this.fileToUpload);
        alert("successfully upload");

       }
    };
if(this.size_limit){
alert("lotfan size kamtar entekhab konid");
    }
    else{
 reader.readAsDataURL(this.fileToUpload);
    }
    // reader.readAsDataURL(this.fileToUpload);
  }
  
  // removeUploadedFile() {
  //   let newFileList = Array.from(this.el.nativeElement.files);
  //   this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  //   this.editFile = true;
  //   this.removeUpload = false;
  //   this.buynowform.patchValue({
  //     file: [null]
  //   });
  // }
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
