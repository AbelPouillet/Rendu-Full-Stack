import { Component } from '@angular/core';
import { IMovie } from './movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  items: IMovie[]
  constructor(private movieService: MovieService){
    movieService.findAll().subscribe( movies => {
      this.items = movies;
    })
  }
  onDelete(){
    this.movieService.findAll().subscribe( movies => {
      this.items = movies;
    })
  }
}
