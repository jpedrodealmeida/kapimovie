import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _toastrService: ToastrService) { }

  ngOnInit(): void {
    
  }

  public info(){
    this._toastrService.info('Hello World')
  }

}
