import React, { createContext, useReducer, Dispatch } from 'react';

import { InitialStateType } from './types';

import { SetCitiesAction, citiesReducer } from './citiesReducer';
import { LoadingActions, loadingReducer } from './loadingReducer';
import { SetScoresAction, statsReducer } from './statsReducer';

const initialState: InitialStateType = {
  cities: [],
  loading: false,
  stats: {
    scores: {
      summary: '',
    },
  },
};

const store = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<SetCitiesAction | SetScoresAction | LoadingActions>;
}>({
  state: initialState,
  dispatch: () => {},
});
const { Provider } = store;

const mainReducer = (
  { cities, loading, stats }: InitialStateType,
  action: LoadingActions | SetCitiesAction | SetScoresAction,
) => ({
  //@ts-ignore
  cities: citiesReducer(cities, action),
  //@ts-ignore
  loading: loadingReducer(loading, action),
  //@ts-ignore
  stats: statsReducer(stats, action),
});

const StateProvider = ({ children }: any): React.ReactElement => {
  const [state, dispatch] = useReducer<any>(mainReducer, initialState);
  //@ts-ignore
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
