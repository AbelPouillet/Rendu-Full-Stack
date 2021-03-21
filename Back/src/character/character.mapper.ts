import moment from 'moment';


export const modelToDto = (model) => {
  return {
    _id: model._id,
    firstName: model.firstName,
    lastName: model.lastName,
    age: moment().year() - model.birthYear
  };
};

export const dtoToModel = (dto) => {
  return {
    _id: dto._id,
    firstName: dto.firstName,
    lastName: dto.lastName,
    birthYear: moment().subtract(dto.age, 'year').year()
  };
};
