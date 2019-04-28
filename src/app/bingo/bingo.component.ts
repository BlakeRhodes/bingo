import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  items: string[];

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.items = this.contentService.getItems();
  }

}
