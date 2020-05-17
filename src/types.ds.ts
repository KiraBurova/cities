export type SearchedCity = {
  matching_alternate_names: [];
  matching_full_name: string;
  _links: {
    ['city:item']: {
      href: string;
    };
  };
};
