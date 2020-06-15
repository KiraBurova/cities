import { ActionTypes, Action } from './types';

export const loadingReducer = (state: boolean, action: Action): boolean => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return action.loading;
    default:
      return state;
  }
};
