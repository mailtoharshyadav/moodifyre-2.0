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

}
