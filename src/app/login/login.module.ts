import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { routing } from './login.routes';
@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
