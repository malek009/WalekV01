import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

}


