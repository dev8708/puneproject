import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogBuynowComponent } from '../dialog-buynow/dialog-buynow.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));
 
 
   constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    ) {}
 
 closeSideNav() {
   if (this.drawer._mode=='over') {
     this.drawer.close();
   }
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
 }
 

//   ngOnInit(): void {
//   }

// }
