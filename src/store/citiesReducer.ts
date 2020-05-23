import { ActionTypes } from './types';

export type SetCitiesAction = {
  type: ActionTypes.SET_CITIES_DATA;
  payload: [];
};

export const citiesReducer = (state: [], action: SetCitiesAction) => {
  switch (action.type) {
    case ActionTypes.SET_CITIES_DATA:
      return (state = action.payload);
    default:
      return state;
  }
};
