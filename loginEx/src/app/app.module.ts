import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {loginComponent} from "./component/login.component";
import {loginService} from "./service/login.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [loginService],
  bootstrap: [loginComponent]
})
export class AppModule { }
