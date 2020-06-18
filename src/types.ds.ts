export type SearchedCity = {
  matching_alternate_names: [];
  matching_full_name: string;
  _links: {
    ['city:item']: {
      href: string;
    };
  };
};

export type CityType = {
  full_name: string;
  geoname_id: number;
  location: {
    geohash: string;
    latlon: { latitude: number; longitude: number };
  };
  name: string;
  population: number;
  _links: {
    'city:urban_area': {
      href: string;
    };
  };
};

export type ImagesType = {
  _links: {};
  photos: Array<{
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
  }>;
};

export type ParamsType = {
  cityId: string;
};

export type ChartData = {
  labels: Array<string>;
  datasets: Array<{
    data: Array<number>;
    backgroundColor: Array<string>;
    borderColor: string;
    borderWidth: number;
  }>;
};
