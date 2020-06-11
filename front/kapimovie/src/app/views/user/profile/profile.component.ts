import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _toastrService: ToastrService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    
  }

  public info(){
    this._toastrService.info('Hello World')
  }

  public goToAllMovies(){
    this._router.navigate(['/movies'])
  }

}
