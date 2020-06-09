import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './views/user/profile/profile.component';
import { MovieListAllComponent } from './views/movie-components/movie-list-all/movie-list-all.component';
import { MovieListFavoriteComponent } from './views/movie-components/movie-list-favorite/movie-list-favorite.component';
import { MovieDetailsComponent } from './views/movie-components/movie-details/movie-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent},
  { path: 'movies', component: MovieListAllComponent},
  { path: 'movies-liked', component: MovieListFavoriteComponent},
  { path: 'movie/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
