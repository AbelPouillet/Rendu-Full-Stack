import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
@Injectable()
export class MovieItemComponent {
  @Input() item: IMovie ;
  @Output() deleteClick = new EventEmitter;
  constructor(private movieService: MovieService, private router: Router){}
  delete(){
    this.movieService.delete(this.item._id).subscribe(() => this.deleteClick.emit());
  }
}
