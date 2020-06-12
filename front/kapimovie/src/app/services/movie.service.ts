import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PublicService } from './public.service';

interface movie{
  title: string,
  year: string,
  rated: string,
  runtime: string,
  genre: string,
  director: string,
  actors: string,
  plot: string,
  poster: string,
  isFavorite: string,
  id: string
}
interface movieList extends Array<movie>{}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _selectedMovie: movie
  private _favoriteList: movieList[] = []
  private _allMovies = ['']

  constructor(private _publicService: PublicService) {}

  public verifyListExist(){
    return this._allMovies[0]['id'] ? true : false
  }
   public getMovies():Observable<any>{
    return this._publicService.getMovies();
  }
    public getListExisting(){
      return this._allMovies
    }

  public configMovieObject(movies){
    movies.map(movie =>{
      movie['isFavorite'] = false
      movie['id'] = this.genereteMovieId()
    })
    this._allMovies = movies
    return movies
  }

  private genereteMovieId() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  public getFavoriteList(){
    return this._favoriteList
  }

  public setFavoriteList(id){
    let indexAllMovies = this.getIndexAllMovieListById(id)
    this._allMovies[indexAllMovies]['isFavorite'] = true
    this.addMovieOnFavoriteList(this._allMovies[indexAllMovies])
    
  }

  public addMovieOnFavoriteList(movie){
    this._favoriteList.push(movie)
  }

  public removeFavoriteFromList(id){
    let indexAllMovies = this.getIndexAllMovieListById(id)
    let indexFavoriteMovies = this.getIndexFavoriteMovieListById(id)
    this._allMovies[indexAllMovies]['isFavorite'] = false
    this._favoriteList.splice(indexFavoriteMovies, 1)
  }

  private getIndexAllMovieListById(id: string){
    let index = this._allMovies.findIndex(movie => movie['id'] == id)
    return index
  }

  private getIndexFavoriteMovieListById(id: string){
    let index = this._favoriteList.findIndex(movie => movie['id'] == id)
    return index
  }

  public setSelectedMovie(movie: movie){
    this._selectedMovie = movie
  }

  public getSelectedMovie(): movie{
    return this._selectedMovie
  }
}
