import { ActionTypes, Action } from './types';

export const citiesReducer = (state: [], action: Action): [] => {
  switch (action.type) {
    case ActionTypes.SET_CITIES_DATA:
      return action.cities;
    default:
      return state;
  }
};
