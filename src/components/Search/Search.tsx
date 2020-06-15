import React, { useEffect, useState, useContext } from 'react';

import { Input } from 'antd';

import { API } from '../../constants';

import { store } from '../../store/store';
import { ActionTypes } from '../../store/types';

const SearchInput = (): React.ReactElement => {
  const [city, setCity] = useState('');
  const { dispatch } = useContext(store);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`${API}/cities/?search=${city}`);
      const data = await response.json();
      const result = data._embedded['city:search-results'];

      if (city) {
        dispatch({ type: ActionTypes.SET_CITIES_DATA, cities: result });
      } else {
        dispatch({ type: ActionTypes.SET_CITIES_DATA, cities: [] });
      }
      dispatch({ type: ActionTypes.LOADING, loading: false });
    };
    fetchCities();
  }, [city, dispatch]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;

    dispatch({ type: ActionTypes.LOADING, loading: true });

    setCity(value);
  };

  return (
    <>
      <Input placeholder='Start searching a city...' onInput={handleInput} />
    </>
  );
};

export default SearchInput;
