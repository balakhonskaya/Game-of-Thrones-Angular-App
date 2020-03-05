import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { House } from '../shared/house';
import { HouseStoreService } from '../shared/house-store.service';

@Component({
  selector: 'bm-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  house: House;

  constructor(
    private bs: HouseStoreService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('index'))
      .subscribe(b => this.house = b);
  }

  getId(house:string) {
    const arrayHouse = house.split('/'); 
    const Id = arrayHouse[5];
    return Id;
  }

}
