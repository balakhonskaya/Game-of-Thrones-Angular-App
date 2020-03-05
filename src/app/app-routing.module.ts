import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { CharacterListComponent} from './character-list/character-list.component';
import { HouseListComponent } from './house-list/house-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HouseDetailsComponent } from './house-details/house-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'characters',
    component: CharacterListComponent
  },
  {
    path: 'houses',
    component: HouseListComponent
  },
  {
    path: 'books/:index',
    component: BookDetailsComponent
  },

  {
    path: 'characters/:index',
    component: CharacterDetailsComponent
  },
  {
    path: 'houses/:index',
    component: HouseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
