export type InitialStateType = {
  cities: [];
  loading: boolean;
  stats: {
    scores: {
      summary: string;
    };
  };
};

export enum ActionTypes {
  SET_CITIES_DATA = 'SET_CITIES_DATA',
  SET_SCORES_DATA = 'SET_SCORES_DATA',
  LOADING = 'LOADING',
}
