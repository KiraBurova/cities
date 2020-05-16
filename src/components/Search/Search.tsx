import React, { useEffect, useState } from 'react';

import { Input } from 'antd';

import styles from './Search.module.scss';

import { API } from '../../constants';

const SearchInput = () => {
  const [city, setCity] = useState('');
  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`${API}/cities/?search=${city}`);
      const data = await response.json();

      console.log(data);
    };
    fetchCities();
  }, [city]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;

    setCity(value);
  };

  return (
    <>
      <div className={styles.searchHolder}>
        <Input placeholder='Start searching a city...' onInput={handleInput} />
      </div>
    </>
  );
};

export default SearchInput;
