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
  showhide:boolean=true;
​
  constructor(private http: HttpClient) {
    if(JSON.parse(localStorage.getItem('song')))
    this.currentsong = JSON.parse(localStorage.getItem('song'));
    else
    this.currentsong =       {
      "name"     : "One Bottle Down",
      "artist"   : "Yo Yo Honey Singh",
      "mood"     : "Excited",
      "location" : "../../assets/songs/abc.mp3",
      "duration" : {"min": 5,"sec" :  57}
    };
   }

  ngOnInit(): void {
    this.age = parseInt( localStorage.getItem('age'))
    this.gender = localStorage.getItem('gender')
    this.emotion = localStorage.getItem('emotion')
    this.happy =     [
      {"name"     : "Chaiyya Chaiyya",
      "artist"   : "Sukhwinder Singh, Sapna Awasthi",
      "mood"     : "happy",
      "location" : "../../assets/songs/Chaiyya Chaiyya - Shahrukh Khan mp3 song Download PagalWorld.com.mp3",
      "duration" : {"min":  6 , "sec" :  57 }
      },
      {
      "name"     : "Dance Basanti",
      "artist"   : "Vishal Dadlani, Anushka Manchanda, Sachin Jigar",
      "mood"     : "happy",
      "location" : "../../assets/songs/Dance Basanti - 190Kbps mp3 song Download PagalWorld.com.mp3"   ,
      "duration" : {"min":  3 , "sec" :  44 }
      },
      {
      "name"     : "Kar Gayi Chull",
      "artist"   : "Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar, Badshah",
      "mood"     : "happy",
      "location" : "../../assets/songs/Kar Gayi Chull - Badshah 320Kbps mp3 song Download PagalWorld.com.mp3" ,
      "duration" : {"min":  3 , "sec" :  7 }
      },
      {
      "name"     : " Bom Diggy Diggy",
      "artist"   : "Jasmin Walia, Zack Knight",
      "mood"     : "happy",
      "location" : "../../assets/songs/Bom Diggy Diggy - Sonu Ke Titu Ki Sweety mp3 song Download PagalWorld.com.mp3"   ,
      "duration" : {"min":  3 , "sec" :  58 },
      },
      {
      "name"     : "Lamborghini Chalai Janiyo",
      "artist"   : "Ragini, The Doorbeen",
      "mood"     : "happy",
      "location" : "../../assets/songs/Lamborghini Chalai Janiyo mp3 song Download PagalWorld.com.mp3" ,
      "duration" : {"min":  3 , "sec" :  36 },
      },
      {
      "name"     : "Main Koi Aisa Geet Gaoon ",
      "artist"   : "Abhijeet Bhattacharya, Alka Yagnik",
      "mood"     : "happy",
      "location" : "../../assets/songs/Main Koi Aisa Geet Gaoon - Shahrukh Khan mp3 song Download PagalWorld.com.mp3" ,
      "duration" : {"min":  5 , "sec" :  17 },
      },
      {
      "name"     : "Dil Se Re",
      "artist"   : "A. R. Rahman",
      "mood"     : "happy",
      "location" : "../../assets/songs/Dil Se Re - Dil Se Mp3 Song Download PagalWorld.mp3" ,
      "duration" : {"min":  6 , "sec" :  44 }
      },
      {
      "name"     : "Gal Mitthi Mitthi",
      "artist"   : "Tochi Raina",
      "mood"     : "happy",
      "location" : "../../assets/songs/"   ,
      "duration" : {"min":  4 , "sec" :  15 }
      },
      {
      "name"     : "Aankh Marey",
      "artist"   : "Neha Kakkar, Mika Singh, Kumar Sanu , Tanishk Bagchi",
      "mood"     : "happy",
      "location" : "../../assets/songs/" ,
      "duration" : {"min":  3 , "sec" :  32 }
      }
    ];
    this.sad = [
      {
        "name"     : "Itni Si Baat",
        "artist"   : "Arijit Singh, Antara Mitra",
        "mood"     : "sad",
        "location" : "../../assets/songs/Itni Si Baat - Arijit Singh - 320Kbps mp3 song Download PagalWorld.com.mp3" ,
        "duration" : {"m":  4 , "sec" :  54 },
        },
        {
        "name"     : "Khairiyat",
        "artist"   : "Pritam Chakraborty",
        "mood"     : "sad",
        "location" : "../../assets/songs/Khairiyat (Sad) - Chhichhore Mp3 Song Download PagalWorld.mp3",
        "duration" : {"m":  4 , "sec" :  40 },
        },
        {
        "name"     : " Main Dhoondne Ko Zamaane Mein",
        "artist"   : "Arijit Singh",
        "mood"     : "sad",
        "location" : "../../assets/songs/Main Dhoondne Ko Zamaane Mein - Arijit Singh - 320Kbps mp3 song Download PagalWorld.com.mp3" ,
        "duration" : {"m":  4 , "sec" :  23 },
        },
        {
        "name"     : "Uska Hi Banana",
        "artist"   : "Arijit Singh",
        "mood"     : "sad",
        "location" : "../../assets/songs/Uska Hi Banana - Arijit Singh - 320Kbps mp3 song Download PagalWorld.com.mp3"  ,
        "duration" : {"m":  5 , "sec" :  28 },
        },
        {
        "name"     : "Kaise Hua",
        "artist"   : "Vishal Mishra, Vishal Mishra",
        "mood"	   : "sad",
        "location" : "../../assets/songs/Kaise Hua - Kabir Singh mp3 song Download PagalWorld.com.mp3" ,
        "duration" : {"m":  3 , "sec" :  54 },
        },
        {
        "name"     : "Judaai ",
        "artist"   : "Rekha Bhardwaj Arijit Singh , SachinJigar" ,
        "mood"     :  "sad",
        "location" : "../../assets/songs/04 Judaai - Badlapur [Arijit Singh] 320Kbps mp3 song Download PagalWorld.com.mp3"    ,
        "duration" : {"m":  4 , "sec" :  31 },
        },
        {
        "name"     : "Bekhayali ",
        "artist"   : "Sachet Tandon, Sachet Parampara",
        "mood"     : "sad",
        "location" : "../../assets/songs/" ,
        "duration" : {"m":  6 , "sec" :  11 },
        },
        {
        "name"     : " Tu Hai Ki Nahi",
        "artist"   : "Ankit Tiwari, Ankit Tiwari",
        "mood"     : "sad",
        "location" : "../../assets/songs/"   ,
        "duration" : {"m":  5 , "sec" :  33 },
        },
        {
        "name"     : "Pachtaoge",
        "artist"   : "Jaani , Arijit Singh, B Praak",
        "mood"     : "sad",
        "location" : "../../assets/songs/",
        "duration" : {"m":  3 , "sec" :  36 },
    }];
    this.excited = [
      {
      "name"     : "One Bottle Down",
      "artist"   : "Yo Yo Honey Singh",
      "mood"     : "Excited",
      "location" : "../../assets/songs/abc.mp3",
      "duration" : {"min": 5,"sec" :  57}
      },
      {
      "name"     : "Believer",
      "artist"   : "Imagine Dragon",
      "mood"     : "excited",
      "location" : "../../assets/songs/",
      "duration" : {"m":  3 , "sec" :  24 },
      },
      {
      "name"     : "Thunder",
      "artist"   : "Imagine Dragon",
      "mood"     : "excited",
      "location" : "../../assets/songs/",
      "duration" : {"m":  3 , "sec" :  24 },
      },
      {
      "name"     : "Dangal",
      "artist"   : "Daler Mehndi,",
      "mood"     : "excited",
      "location" : "../../assets/songs/Dangal-b-Title-Song-(pagalworldsongs.co.in).mp3",
      "duration" : {"m":  4 , "sec" :  59 },
      },
      {
      "name"     : "Bhaag Milkha Bhaag",
      "artist"   : "Arif Lohar",
      "mood"     : "excited",
      "location" : "../../assets/songs/05 Bhaag Milkha Bhaag mp3 song Download PagalWorld.com.mp3",
      "duration" : {"m":  4 , "sec" :  29 },
      },
      {
      "name"     : "Kar Har Maidaan Fateh",
      "artist"   : "Sukhwinder Singh, Shreya Ghoshal, Vikram Montrose",
      "mood"     : "excited",
      "location" : "../../assets/songs/02 Kar Har Maidaan Fateh - Sanju mp3 song Download PagalWorld.com.mp3",
      "duration" : {"m":  5 , "sec" :  11 },
      },
      {
      "name"     : "Jigra",
      "artist"   : "Shashwat Sachdev, Siddharth Basrur, Dev Negi,",
      "mood"     : "excited",
      "location" : "../../assets/songs/Jigra-b-URI-(pagalworldsongs.co.in).mp3",
      "duration" : {"m":  4 , "sec" : 1 },
      },{
      "name"     : "Ghamand Kar",
      "artist"   : "Sachet Tandon, Parampara Thakur, Sachet Parampara",
      "mood"     : "excited",
      "location" : "../../assets/songs/Ghamand Kar - Tanhaji mp3 song Download PagalWorld.com.mp3",
      "duration" : {"m":  4 , "sec" :  42 },
      },{
      "name"     : "Paintra ",
      "artist"   : "Nucleya, DIVINE, Nucleya",
      "mood"     : "excited",
      "location" : "../../assets/songs/",
      "duration" : {"m":  5 , "sec" :  11 },
      },{
      "name"     : "Song name",
      "artist"   : "singer name",
      "mood"     : "excited",
      "location" : "../../assets/songs/",
      },{
      "name"     : "Song name",
      "artist"   : "singer name",
      "mood"     : "excited",
      "location" : "",
      }
      ];
    this.switchmood(1);
  }
  playsong(song:any){
    this.currentsong = song;
    localStorage.setItem('song', JSON.stringify(song));
    window.location.reload();
  }
  switchmood(id:any){
    if(id==3){
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

