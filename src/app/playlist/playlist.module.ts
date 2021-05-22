import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { playlistRoutingModule } from './playlist-routing.module';



@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    playlistRoutingModule
  ]
})
export class PlaylistModule { }
