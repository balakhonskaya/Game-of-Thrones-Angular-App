import { Component, OnInit } from '@angular/core';

import { House } from '../shared/house';
import { HouseStoreService } from '../shared/house-store.service';

@Component({
  selector: 'bm-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[];

  constructor(private bs: HouseStoreService) { }

  ngOnInit() {
    this.bs.getAll().subscribe(res => this.houses = res);
  }

}
