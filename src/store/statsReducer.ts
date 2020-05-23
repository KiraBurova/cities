import { ActionTypes } from './types';

export type SetScoresAction = {
  type: ActionTypes.SET_SCORES_DATA;
  payload: {};
};

type State = {
  scores: {};
};

export const statsReducer = (state: State, action: SetScoresAction) => {
  switch (action.type) {
    case ActionTypes.SET_SCORES_DATA:
      return { ...state, scores: action.payload };
    default:
      return state;
  }
};
