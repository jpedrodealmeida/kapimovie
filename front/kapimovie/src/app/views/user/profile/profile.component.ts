import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


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
    private _fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.createForm()
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
    let user = this.createUserObject()
    this.saveUser(user)
  }

  private createUserObject(): object{
    let user = {
      name: this.form.controls['name'].value,
      age: this.form.controls['age'].value,
      movie: this.form.controls['movie'].value,
      genre: this.form.controls['genre'].value
    }
    return user
  }

  private saveUser(user: object){
    debugger
  }

}
