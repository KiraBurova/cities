export type ImagesType = {
  _links: {};
  photos: Array<PhotosType>;
};

export type PhotosType = {
  attribution: {
    license: string;
    photographer: string;
    site: string;
    source: string;
  };
  image: {
    mobile: string;
    web: string;
  };
};
