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

export type ScoresType = {
  stats: {
    scores: {
      summary?: string;
      categories: Array<{
        color: string;
        name: string;
        score_out_of_10: number;
      }>;
    };
    images: ImagesType;
  };
};
