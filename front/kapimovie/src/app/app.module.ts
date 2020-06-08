import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    ModalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
