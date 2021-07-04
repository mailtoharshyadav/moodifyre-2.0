import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.scss']
})
export class DetectComponent implements OnInit {

  url:string;
  constructor(private router: Router) {
    this.url = router.url;
    console.log(this.url)
   }

  ngOnInit(): void {


    }
    go(){
      //<!--  anger fear joy and sadness represent sadness surprise disgust contempt -->
      let mood = localStorage.getItem('emotion');
      if(mood == 'joy' || mood == 'happy'){
        localStorage.setItem('song',JSON.stringify(      {
          "name"     : "Dance Basanti",
          "artist"   : "Vishal Dadlani, Anushka Manchanda, Sachin Jigar",
          "mood"     : "happy",
          "location" : "../../assets/songs/Dance Basanti - 190Kbps mp3 song Download PagalWorld.com.mp3"   ,
          "duration" : {"min":  3 , "sec" :  44 }
          }));
      }
      else if(mood == 'sad'){
        localStorage.setItem('song',JSON.stringify(      {
          "name"     : "Itni Si Baat",
          "artist"   : "Arijit Singh, Antara Mitra",
          "mood"     : "sad",
          "location" : "../../assets/songs/Itni Si Baat - Arijit Singh - 320Kbps mp3 song Download PagalWorld.com.mp3" ,
          "duration" : {"min":  4 , "sec" :  54 },
          }));
      }
      else{
        localStorage.setItem('song',JSON.stringify({
          "name"     : "One Bottle Down",
          "artist"   : "Yo Yo Honey Singh",
          "mood"     : "Excited",
          "location" : "../../assets/songs/abc.mp3",
          "duration" : {"min": 5,"sec" :  57}
        }));
      }
      this.router.navigateByUrl(`/playlist`);
    }
}
