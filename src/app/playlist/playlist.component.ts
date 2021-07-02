import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  emotion:string
  age:number
  gender:string

  teams$ = this.http.get('http://localhost:3000/api/teams');
​
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.age = parseInt( localStorage.getItem('age'))
    this.gender = localStorage.getItem('gender')
    this.emotion = localStorage.getItem('emotion')
  }

}
/*
[
  {
    "name" : "Song name"
    "artist" : "singer name"
    "duration" : "song duration"
    "mood" : "happy"
    "location" : ""
  },
  {
    "name" : "Song name"
    "artist" : "singer name"
    "duration" : "song duration"
    "mood" : "sad"
    "location" : ""
  },

]

*/
