
export const modelToDto = (model) => {
  return {
    _id: model._id,
    title: model.title,
    year: model.year,
    imageUrl: model.imageUrl
  };
};

export const dtoToModel = (dto) => {
  return {
    _id: dto._id,
    title: dto.title,
    year: dto.year,
    imageUrl: dto.imageUrl
  };
};
