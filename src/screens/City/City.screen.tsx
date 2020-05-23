import React from 'react';

import City from '../../components/City';
import Scores from '../../components/Scores';

const CityScreen = (): React.ReactElement => {
  return (
    <>
      <City />
      <Scores />
    </>
  );
};

export default CityScreen;
