import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  emotion:string
  age:number
  gender:string

  constructor() { }

  ngOnInit(): void {
    this.age = parseInt( localStorage.getItem('age'))
    this.gender = localStorage.getItem('gender')
    this.emotion = localStorage.getItem('emotion')
  }

}
