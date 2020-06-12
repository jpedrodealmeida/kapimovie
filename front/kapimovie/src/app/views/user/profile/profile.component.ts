import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../../app/services/user/user.service';

interface user{
  name: string,
  age: number,
  favoriteMovie: string,
  genre: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public form: FormGroup
  public genreList = 
  [
    {name: "Action", value:'action'}, {name: "Adventure", value: 'Adventure'},
    {name: "Comedy", value: 'comedy'}, {name: "Crime", value: 'crime'},	
    {name: "Drama", value:'drama'},	{name: "Fantasy", value: 'fantasy'},
    {name: "Horror", value: 'horror'},	{name: "Mystery", value: 'Mystery'}
  ]
      
  constructor(
    private _toastrService: ToastrService,
    private _router: Router,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _location: Location,
    ) { }

  ngOnInit(): void {
    this.createForm()
    this.getUser()
  }

  private getUser(){
    let user = this._userService.getUser()
    this.form.controls['name'].patchValue(user.name)
    this.form.controls['age'].patchValue(user.age)
    this.form.controls['movie'].patchValue(user.favoriteMovie)
    this.form.controls['genre'].patchValue(user.genre)
  }

  private createForm() {
    this.form = this._fb.group({
      name: [null, Validators.compose([Validators.required])],
      age: [null, Validators.compose([Validators.required, Validators.max(120)])],
      movie: [null, Validators.compose([Validators.required])],
      genre: [null, Validators.compose([Validators.required])],
    });
  }

  public info(){
    this._toastrService.info('Hello World')
  }

  public goToAllMovies(){
    this._router.navigate(['/movies'])
  }

  public saveButton(){
    if(this.form.valid){
      let user = this.createUserObject()
      this.saveUser(user)
    }else
      this._toastrService.info('Please, check your data')
  }

  private createUserObject(): user{
    let user = {
      name: this.form.controls['name'].value,
      age: this.form.controls['age'].value,
      favoriteMovie: this.form.controls['movie'].value,
      genre: this.form.controls['genre'].value
    }
    return user
  }

  private saveUser(user: user){
    this._userService.updateUser(user)
    this._toastrService.success('User updated')
  }

  public cancelButton(){
    this._location.back()
  }

}
