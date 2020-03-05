import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // NEW

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CharacterListItemComponent } from './character-list-item/character-list-item.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseListItemComponent } from './house-list-item/house-list-item.component';
import { HouseDetailsComponent } from './house-details/house-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    CharacterListItemComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    HouseListComponent,
    HouseListItemComponent,
    HouseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // NEW
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
