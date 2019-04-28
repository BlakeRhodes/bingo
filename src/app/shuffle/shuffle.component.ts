import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.css']
})
export class ShuffleComponent implements OnInit {

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
  }

  shuffle() {
    this.contentService.shuffle();
  }
}


