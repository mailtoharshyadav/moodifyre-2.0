import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetectComponent } from './detect.component';


const routes: Routes = [
  {path: '', component: DetectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetectRoutingModule { }
