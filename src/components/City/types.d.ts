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

export type ParamsType = {
  cityId: string;
};
