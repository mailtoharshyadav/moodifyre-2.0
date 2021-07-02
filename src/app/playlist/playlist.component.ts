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
  happy:any;
  currentmood:string;
  currentmoodArray:any;
  currentsong: any;
  sad:any;
  excited:any;
  teams$ = this.http.get('http://localhost:3000/api/teams');
​
  constructor(private http: HttpClient) {
    this.currentsong =       {
      "name"     : "Chaiyya Chaiyya",
      "artist"   : "Sukhwinder Singh, Sapna Awasthi",
      "mood"     : "happy",
      "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
      "duration" : {"min": 5,"sec" :  57}
    };
   }

  ngOnInit(): void {
    this.age = parseInt( localStorage.getItem('age'))
    this.gender = localStorage.getItem('gender')
    this.emotion = localStorage.getItem('emotion')
    this.happy = [

      {
        "name"     : "Chaiyya Chaiyya",
        "artist"   : "Sukhwinder Singh, Sapna Awasthi",
        "mood"     : "happy",
        "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
        "duration" : {"min": 5,"sec" :  57}
      },
      {
        "name"     : "Chaiyya Chaiyya",
        "artist"   : "Sukhwinder Singh, Sapna Awasthi",
        "mood"     : "happy",
        "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
        "duration" : {"min": 5,"sec" :  57}
      },
      {
        "name"     : "Chaiyya Chaiyya",
        "artist"   : "Sukhwinder Singh, Sapna Awasthi",
        "mood"     : "happy",
        "location" : "Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
        "duration" : {"min": 5,"sec" :  57}
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
    ];
    this.sad = [
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

    ];
    this.excited = [
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
    this.switchmood(1);
  }
  playsong(song:any){
    this.currentsong = song;
  }
  switchmood(id:any){
    if(id==1){
      this.currentmood="Happy";
      this.currentmoodArray=this.happy;}
    else if(id==2){
      this.currentmood="Sad";
      this.currentmoodArray=this.sad;}
    else{
      this.currentmood="Excited";
      this.currentmoodArray=this.excited;}
  }
}

