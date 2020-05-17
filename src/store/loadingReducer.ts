import { ActionTypes } from './types';

export type LoadingActions = {
  type: ActionTypes.LOADING;
  payload: boolean;
};

export const loadingReducer = (state: boolean, action: LoadingActions) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return (state = action.payload);
    default:
      return state;
  }
};
