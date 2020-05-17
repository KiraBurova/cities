export type InitialStateType = {
  cities: [];
  loading: boolean;
};

export enum ActionTypes {
  SET_CITIES_DATA = 'SET_CITIES_DATA',
  LOADING = 'LOADING',
}
