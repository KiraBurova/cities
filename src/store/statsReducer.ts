import { ActionTypes, Action } from './types';

type ScoresStateType = {
  scores: {
    summary?: string;
  };
};

export const statsReducer = (state: ScoresStateType, action: Action): ScoresStateType => {
  switch (action.type) {
    case ActionTypes.SET_SCORES_DATA:
      return {
        ...state,
        scores: action.scores,
      };
    default:
      return state;
  }
};
