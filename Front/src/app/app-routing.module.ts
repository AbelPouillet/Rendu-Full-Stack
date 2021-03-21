import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterEditComponent } from './character/character-edit/character-edit.component';
import { CharacterComponent } from './character/character.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterComponent
  },
  {
    path: 'characters/edit',
    component: CharacterEditComponent
  },
  {
    path: 'characters/edit/:id',
    component: CharacterEditComponent
  },
  {
    path: 'movies',
    component: MovieComponent
  },
  {
    path: 'movies/edit',
    component: MovieEditComponent
  },
  {
    path: 'movies/edit/:id',
    component: MovieEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
