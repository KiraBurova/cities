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
  _links: [];
};

export type ParamsType = {
  cityId: string;
};
