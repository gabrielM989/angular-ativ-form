import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from './material.module'
import {MatDialogModule} from '@angular/material/dialog';
import { DialogoReactiveComponent } from './reactive/dialogo-reactive/dialogo-reactive.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogoReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
