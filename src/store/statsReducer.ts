import { ActionTypes, Action } from './types';

type ScoresStateType = {
  scores: {
    summary?: string;
    categories: Array<{
      color: string;
      name: string;
      score_out_of_10: number;
    }>;
  };
};

export const statsReducer = (state: ScoresStateType, action: Action): ScoresStateType => {
  switch (action.type) {
    case ActionTypes.SET_SCORES_DATA:
      return {
        ...state,
        scores: {
          ...state.scores,
          summary: action.scores.summary,
          categories: action.scores.categories,
        },
      };
    default:
      return state;
  }
};
