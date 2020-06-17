import React, { createContext, useReducer, Dispatch, Reducer } from 'react';

import { InitialStateType, Action, ProviderProps } from './types';

import { citiesReducer } from './citiesReducer';
import { loadingReducer } from './loadingReducer';
import { statsReducer } from './statsReducer';

export const initialState: InitialStateType = {
  cities: [],
  loading: false,
  stats: {
    scores: {
      summary: '',
      categories: [
        {
          name: '',
          color: '',
          score_out_of_10: 0,
        },
      ],
    },
  },
};

const store = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});
const { Provider } = store;

const mainReducer = ({ loading, cities, stats }: InitialStateType, action: Action) => ({
  cities: citiesReducer(cities, action),
  loading: loadingReducer(loading, action),
  stats: statsReducer(stats, action),
});

const StateProvider = ({ children }: ProviderProps): React.ReactElement => {
  const [state, dispatch] = useReducer<Reducer<InitialStateType, Action>>(
    mainReducer,
    initialState,
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
