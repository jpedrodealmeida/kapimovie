import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list-generic',
  templateUrl: './movie-list-generic.component.html',
  styleUrls: ['./movie-list-generic.component.scss']
})
export class MovieListGenericComponent implements OnInit {

  @Input('movieList') movies

  constructor() { }

  ngOnInit(): void {
  }

}
