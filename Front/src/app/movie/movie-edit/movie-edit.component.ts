import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent {

  formGroup: FormGroup;
  _id: string | null;
  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      title: [String, [Validators.required, Validators.minLength(3)]],
      year: [String, Validators.required],
      imageUrl: [String, [Validators.required, Validators.minLength(3)]]
    });
    this.reset();
    this._id = this.route.snapshot.paramMap.get('id');
  }

  reset(): void {
    this.formGroup.reset({
      year: 1990
    });
  }

  save(): void {
    if (this.formGroup.valid) {
      if (this._id) {
        const movie: IMovie = {
          _id: this._id,
          title: this.formGroup.value.title,
          year: this.formGroup.value.year,
          imageUrl: this.formGroup.value.imageUrl
        };
        this.movieService.update(movie).subscribe(() => {this.router.navigateByUrl('/movies'); });
      }
      else {
        const movie: IMovie = {
          _id: '0',
          title: this.formGroup.value.title,
          year: this.formGroup.value.year,
          imageUrl: this.formGroup.value.imageUrl
        };
        this.movieService.create(movie).subscribe( () => {this.router.navigateByUrl('/movies');} );
      }

    }
  }
}
