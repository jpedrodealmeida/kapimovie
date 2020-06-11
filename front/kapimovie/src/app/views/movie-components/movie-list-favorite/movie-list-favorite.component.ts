import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../../../../app/services/movie.service';

@Component({
  selector: 'app-movie-list-favorite',
  templateUrl: './movie-list-favorite.component.html',
  styleUrls: ['./movie-list-favorite.component.scss']
})
export class MovieListFavoriteComponent implements OnInit {

  public favoriteList = []
  
  constructor(
    private _toastrService: ToastrService,
    private _movieService: MovieService
    ) { }

  ngOnInit(): void {
    this.getFavoriteMovies()
  }

  private getFavoriteMovies(){
    this.favoriteList = this._movieService.getFavoriteList()
  }

  public removeMovieFromFavoriteList(movieFavorite){
    this._movieService.removeFavoriteFromList(movieFavorite.id)
    this.getFavoriteMovies()
    this._toastrService.success('Favorite list updated')
  }
}
