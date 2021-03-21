import { PrimaryKeyError } from '../common/error/repository-error.model';
import store from './movie.json';
import { IMovie } from './movie.model';
import Movie from './movie.schema';

export const findAll = (): Promise<IMovie[]> => {
  return Movie.find().then();
};

export const get = (id: string) => {
  return Movie.findOne({ _id: id }).then(movie => {
    if (movie) {
      return movie;
    }
    else {
      throw new PrimaryKeyError();
    }
  }
  ).catch(error => {
    console.error(error);
  });
};

export const create = (model: IMovie) => {
  const newMovie = new Movie({
    year: model.year,
    title: model.title,
    imageUrl: model.imageUrl
  })
  return newMovie.save().then(movie => {
    return movie;
  }).catch(error => {
    console.error(error);
  }
  );
};

export const update = (id: string, model: IMovie) => {
  return Movie.updateOne({ _id: id }, model).then(
    movie => {
      return movie;
    }
  ).catch(error => { console.error(error); }
  );
};

export const remove = (id: string) => {
  return Movie.deleteOne({ _id: id }).then(
    movie => {
      return movie;
    }
  ).catch(error => { console.error(error); }
  );
};
