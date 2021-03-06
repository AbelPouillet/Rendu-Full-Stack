import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() items: IMovie[] | undefined;
  @Output() delete= new EventEmitter;
  onDelete(){
    this.delete.emit();
  }
}
