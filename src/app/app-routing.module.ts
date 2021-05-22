import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', loadChildren: ()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  { path: 'login', loadChildren: ()=>import('./login/login.module').then(mod=>mod.LoginModule)},
  { path: 'detect', loadChildren: ()=>import('./detect/detect.module').then(mod=>mod.DetectModule)},
  { path: 'playlist', loadChildren: ()=>import('./playlist/playlist.module').then(mod=>mod.PlaylistModule)},
  {path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
