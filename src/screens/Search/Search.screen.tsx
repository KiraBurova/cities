import React from 'react';

import Search from '../../components/Search';
import Cities from '../../components/Cities';

import styles from './SearchScreen.module.scss';

const SearchScreen = (): React.ReactElement => {
  return (
    <div className={styles.searchHolder}>
      <Search />
      <Cities />
    </div>
  );
};

export default SearchScreen;
