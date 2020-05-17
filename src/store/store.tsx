import React, { createContext, useReducer, Dispatch } from 'react';

import { InitialStateType } from './types';

import { citiesReducer, CitiesActions } from './citiesReducer';
import { LoadingActions, loadingReducer } from './loadingReducer';

const initialState: InitialStateType = {
  cities: [],
  loading: false,
};

const store = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<CitiesActions | LoadingActions>;
}>({
  state: initialState,
  dispatch: () => {},
});
const { Provider } = store;

const mainReducer = (
  { cities, loading }: InitialStateType,
  action: LoadingActions | CitiesActions,
) => ({
  //@ts-ignore
  cities: citiesReducer(cities, action),
  //@ts-ignore
  loading: loadingReducer(loading, action),
});

const StateProvider = ({ children }: any): React.ReactElement => {
  const [state, dispatch] = useReducer<any>(mainReducer, initialState);
  //@ts-ignore
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
