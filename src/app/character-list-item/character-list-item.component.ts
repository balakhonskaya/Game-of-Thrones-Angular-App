import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../shared/character';

@Component({
  selector: 'bm-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent implements OnInit {
  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
