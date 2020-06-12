import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

import { MovieService } from '../../../../app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public selectedMovie
  public actorList = []
  public genreList = []

  constructor(
    private _location: Location,
    private _toastrService: ToastrService,
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovieDetails()
  }

  private getMovieDetails(){
    this.selectedMovie = this._movieService.getSelectedMovie()
    if(this.selectedMovie == undefined)
      this.getMovieFromLocalStorage()
    else{
      let stringMovie = JSON.stringify(this.selectedMovie)
      localStorage.setItem('movie', stringMovie)
    }
    this.createListsForShow()
  }

  private createListsForShow(){
    this.actorList = this.getListFromString(this.selectedMovie['actors'])
    this.genreList = this.getListFromString(this.selectedMovie['genre'])
  }

  private getMovieFromLocalStorage(){
    let objectMovie = JSON.parse(localStorage.getItem('movie'))
    this.selectedMovie = objectMovie
    this.selectedMovie['isFavorite'] = false
  }

  public goToBackPage(){
    this._location.back()
  }

  public getListFromString(content: string){
    let list = content.split(',');
    return list
  }

  public favoriteMovie(){
    if(this.selectedMovie['isFavorite'])
      this._movieService.removeFavoriteFromList(this.selectedMovie['id'])
    else
      this._movieService.setFavoriteList(this.selectedMovie)
    this._toastrService.success('Favorite list updated')
  }

  public getTextFavoriteButton(isFavorite): string{
    return isFavorite ? 'Remove from favorites' : 'Add to favorites'
  }

}
