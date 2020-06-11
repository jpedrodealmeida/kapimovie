import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list-generic',
  templateUrl: './movie-list-generic.component.html',
  styleUrls: ['./movie-list-generic.component.scss']
})
export class MovieListGenericComponent implements OnInit {

  @Input('movieList') movies

  @Output() like = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public emitLikeMovie(isFavorite, index, id){
    let favoriteObj = {
      isFavorite: !isFavorite,
      index: index,
      id: id
    }
    this.like.emit(favoriteObj)
  }

}
