import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListAllComponent } from './movie-list-all/movie-list-all.component';
import { MovieListFavoriteComponent } from './movie-list-favorite/movie-list-favorite.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieTopBarComponent } from './movie-top-bar/movie-top-bar.component';



@NgModule({
  declarations: [
    MovieListAllComponent,
    MovieListFavoriteComponent,
    MovieDetailsComponent,
    MovieTopBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
