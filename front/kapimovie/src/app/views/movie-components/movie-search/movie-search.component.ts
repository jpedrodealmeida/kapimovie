import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  @Input('screenName') screenName = 'List all'

  public placeHolder = 'Search movies, actors or genre'

  constructor() { }

  ngOnInit(): void {
  }

}
