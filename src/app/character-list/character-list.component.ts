import { Character } from '../shared/character';

import { CharacterStoreService } from '../shared/character-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(private bs: CharacterStoreService) { }

  ngOnInit() {
    this.bs.getAll().subscribe(res => this.characters = res);
  }

}
