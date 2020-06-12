import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  @Input('buttonName') buttonName = 'Favorites'

  @Output() textSearch = new EventEmitter()

  public placeHolder = 'Search movies, actors or genre'

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public goToPage(){
    if(this.buttonName == 'Favorites')
      this._router.navigate(['/movies-liked'])
    else if(this.buttonName == 'List all')
      this._router.navigate(['/movies'])
  }

  public emitSearchValue(event){
    let value = event.target.value
    this.textSearch.emit(value)
    
  }

}
