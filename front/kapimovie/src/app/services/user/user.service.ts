import { Injectable } from '@angular/core';

interface user{
  name: string,
  age: number,
  favoriteMovie: string,
  genre: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: user = 
  {
    name: 'John Wick',
    age: 24, 
    favoriteMovie: 'Sharknado 2', 
    genre: 'horror'
  }

  constructor() { }

  public getUser(){
    return this._user
  } 
  public updateUser(user: user){
    this._user = user
  }
}
