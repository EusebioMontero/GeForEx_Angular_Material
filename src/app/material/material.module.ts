import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule } from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';



import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollingModule} from '@angular/cdk/scrolling';

//formularios
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,

    FlexLayoutModule,
    ScrollingModule,
    FormsModule
  ],
  exports:[
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,

    FlexLayoutModule,
    ScrollingModule,
    FormsModule,
  ]
})
export class MaterialModule { }
