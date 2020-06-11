import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../../../../app/services/movie.service';

@Component({
  selector: 'app-movie-list-all',
  templateUrl: './movie-list-all.component.html',
  styleUrls: ['./movie-list-all.component.scss']
})
export class MovieListAllComponent implements OnInit {

  public movieList 
  
  constructor(
    private _toastrService: ToastrService,
     private _movieService: MovieService ) { }

  ngOnInit(): void {
    this.getAllMovies()
  }

  private getAllMovies(){
    this.movieList = this._movieService.getAllMovies();
  }

  public favoriteMovie(movieFavorite){
    this.movieList[movieFavorite.index]['isFavorite'] = movieFavorite.isFavorite
    this.updateList(movieFavorite)
    this._toastrService.success('Favorite list updated')
  }

  private updateList(movie){
    if(movie.isFavorite)
      this._movieService.setFavoriteList(this.movieList[movie.index])
    else
      this._movieService.removeFavoriteFromList(movie.id)
  }

}
