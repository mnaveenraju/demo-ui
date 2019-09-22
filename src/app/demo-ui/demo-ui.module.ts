import { NgModule } from '@angular/core';
import { DemoUiComponent } from './demo-ui.component';
import { CommonModule } from '@angular/common';  
import {MatTableModule, 
    MatSelectModule, 
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  declarations: [DemoUiComponent],
  providers: [],
  exports: [
    
  ]
})
export class DemoUiModule { }

