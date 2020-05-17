import { ActionTypes } from './types';

export type CitiesActions = {
  type: ActionTypes.SET_CITIES_DATA;
  payload: [];
};

export const citiesReducer = (state: [], action: CitiesActions) => {
  switch (action.type) {
    case ActionTypes.SET_CITIES_DATA:
      return (state = action.payload);
    default:
      return state;
  }
};
