import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreService } from '../core.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers: [ CoreService ]
})
export class LoginModule { }
