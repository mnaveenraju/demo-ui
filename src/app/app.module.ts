import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { MatFormFieldModule, MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { DemoService } from './services/demo.service'

import { DemoUiModule } from './demo-ui/demo-ui.module';


import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DemoUiModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
