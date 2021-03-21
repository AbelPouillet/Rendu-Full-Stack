import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie.model';

@Injectable()
export class MovieService {
  private url = 'http://localhost:3000/movies';

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.url);
  }

  create(movie: IMovie): Observable<IMovie> {
    return this.http.post<IMovie>(this.url, movie);
  }

  update(movie: IMovie): Observable<IMovie> {
    return this.http.put<IMovie>(this.url+'/'+movie._id, movie);
  }

  delete(id: string) {
    let fullUrl = this.url+'/'+id;
    return this.http.delete<IMovie>(fullUrl);
  }
}
