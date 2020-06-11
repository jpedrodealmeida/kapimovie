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

  public selectecMovie

  constructor(
    private _location: Location,
    private _router: Router,
    private _toastrService: ToastrService,
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovieDetails()
  }

  private getMovieDetails(){
    this.selectecMovie = this._movieService.getSelectedMovie()
  }

  public goToBackPage(){
    this._location.back()
  }

}
