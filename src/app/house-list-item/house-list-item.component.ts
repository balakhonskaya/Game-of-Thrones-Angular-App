import { Component, OnInit, Input } from '@angular/core';

import { House } from '../shared/house';


@Component({
  selector: 'bm-house-list-item',
  templateUrl: './house-list-item.component.html',
  styleUrls: ['./house-list-item.component.css']
})
export class HouseListItemComponent implements OnInit {
  @Input() house: House;

  constructor() { }

  ngOnInit() {
  }

}
