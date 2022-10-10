import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import { DialogBuynowComponent } from './dialog-buynow/dialog-buynow.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { CustomBreakPointsProvider, CUSTOM_HEIGHT_BREAKPOINTS } from './breakpoints';
import {LayoutModule} from '@angular/cdk/layout';
import { MatGridListResponsiveModule} from './mat-gridlist-responsive/mat-gridlist.module'
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule,} from '@angular/material/slide-toggle';
import { FileSizePipe } from './dialog-buynow/file.size.pipe';





@NgModule({
  declarations: [
    AppComponent,
    DialogBuynowComponent,
    SidenavComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    // FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatGridListModule,
    MatDividerModule,
    MatBadgeModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatGridListResponsiveModule
    // FlexLayoutModule.withConfig({}, CUSTOM_HEIGHT_BREAKPOINTS )

  ],
  providers: [  ],
  // entryComponents: [DialogBuynowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
