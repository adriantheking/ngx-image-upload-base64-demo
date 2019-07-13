import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxImageUploadBase64Module } from 'ngx-image-upload-base';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImageUploadBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
