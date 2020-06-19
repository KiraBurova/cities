import { ImagesType } from '../types';

export type InitialStateType = {
  cities: [];
  loading: boolean;
  stats: {
    scores: {
      summary?: string;
      categories: Array<{
        color: string;
        name: string;
        score_out_of_10: number;
      }>;
    };
    images: ImagesType;
  };
};

export enum ActionTypes {
  SET_CITIES_DATA = 'SET_CITIES_DATA',
  SET_SCORES_DATA = 'SET_SCORES_DATA',
  LOADING = 'LOADING',
}

export type SetScoresAction = {
  type: ActionTypes.SET_SCORES_DATA;
  scores: {
    summary: string;
    categories: Array<{
      color: string;
      name: string;
      score_out_of_10: number;
    }>;
  };
  images: ImagesType;
};

export type LoadingActions = {
  type: ActionTypes.LOADING;
  loading: boolean;
};

export type SetCitiesAction = {
  type: ActionTypes.SET_CITIES_DATA;
  cities: [];
};

export type Action = SetCitiesAction | SetScoresAction | LoadingActions;

export type ProviderProps = {
  children: React.ReactNode;
};
