import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-top-bar',
  templateUrl: './movie-top-bar.component.html',
  styleUrls: ['./movie-top-bar.component.scss']
})
export class MovieTopBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public goToProfile(){
    this._router.navigate(['/profile'])
  }



}
