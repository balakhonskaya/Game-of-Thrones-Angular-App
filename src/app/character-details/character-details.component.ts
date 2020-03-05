import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Character } from '../shared/character';
import { CharacterStoreService } from '../shared/character-store.service';

@Component({
  selector: 'bm-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character: Character;

  constructor(
    private bs: CharacterStoreService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('index'))
      .subscribe(b => this.character = b);
  }

}
