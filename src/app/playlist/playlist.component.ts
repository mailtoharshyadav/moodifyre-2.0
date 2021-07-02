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
  db:any;
  teams$ = this.http.get('http://localhost:3000/api/teams');
​
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.age = parseInt( localStorage.getItem('age'))
    this.gender = localStorage.getItem('gender')
    this.emotion = localStorage.getItem('emotion')
    this.db  = [{
      "happy": [

        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        },
        {
          "name"     : "Chaiyya Chaiyya",
          "artist"   : "Sukhwinder Singh, Sapna Awasthi",
          "mood"     : "happy",
          "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
          "duration" : {"sec" :  57}
        }
      ],
    "sad": [
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      },
      {
        "name"     : "Itni Si Baat",
      "artist"   : "Arijit Singh, Antara Mitra",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  4 , "sec" :  54 }
      }

    ],
    "excited" : [
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      },
      {
        "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "happy",
      "location" : "" ,
      "duration" : {"m":  3 , "sec" :  24 }
      }
    ]
    }];
    console.log(JSON.stringify(this.db));
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
