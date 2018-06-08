import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from './app.routes';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
