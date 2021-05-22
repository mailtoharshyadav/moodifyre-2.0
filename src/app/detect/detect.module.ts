import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectComponent } from './detect.component';
import { DetectRoutingModule } from './detect-routing.module';



@NgModule({
  declarations: [DetectComponent],
  imports: [
    CommonModule,
    DetectRoutingModule
  ]
})
export class DetectModule { }
