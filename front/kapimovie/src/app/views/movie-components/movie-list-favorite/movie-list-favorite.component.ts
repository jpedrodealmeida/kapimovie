import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-list-favorite',
  templateUrl: './movie-list-favorite.component.html',
  styleUrls: ['./movie-list-favorite.component.scss']
})
export class MovieListFavoriteComponent implements OnInit {



  public favoriteList = 
  [
    {
      "title": "Whiplash",
      "year": "2014",
      "rated": "R",
      "runtime": "106 min",
      "genre": "Drama, Music",
      "director": "Damien Chazelle",
      "actors": "Miles Teller, J.K. Simmons, Melissa Benoist",
      "plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX675_CR0,0,675,999_AL_.jpg"
    },
    {
      "title": "Pulp Fiction ",
      "year": "1994",
      "rated": "R",
      "runtime": "154 min",
      "genre": "Crime, Drama",
      "director": "Quentin Tarantino",
      "actors": "John Travolta, Uma Thurman, Samuel L. Jackson",
      "plot": "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
    }
    
  ]
  constructor(private _toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  public removeMovieFromFavoriteList(movieFavorite){
    this.favoriteList[movieFavorite.index]['isFavorite'] = movieFavorite.isFavorite
    this.uptadeFavoriteList(movieFavorite.index)
    this._toastrService.success('Favorite list updated')
  }

  private uptadeFavoriteList(index: number){
    this.favoriteList.splice(index, 1);
  }
}
