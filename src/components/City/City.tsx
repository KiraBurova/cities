import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { PageHeader, Descriptions } from 'antd';

import { API } from '../../constants';
import { ParamsType, CityType } from '../../types.ds';
import { formatNumber } from '../../helpers';
import { store } from '../../store/store';
import { ActionTypes } from '../../store/types';

const City = (): React.ReactElement => {
  const params = useParams<ParamsType>();
  const [city, setCity] = useState<CityType | null>(null);
  const { dispatch } = useContext(store);

  useEffect(() => {
    const fetchCity = async () => {
      const cityResult = await fetch(`${API}/cities/geonameid:${params.cityId}`);
      const city: CityType = await cityResult.json();

      //ua:scores

      const urbanResult = await fetch(city._links['city:urban_area'].href);
      const urbanArea = await urbanResult.json();

      const scoresResult = await fetch(urbanArea._links['ua:scores'].href);
      const scores = await scoresResult.json();

      dispatch({ type: ActionTypes.SET_SCORES_DATA, payload: scores });

      setCity(city);
    };

    fetchCity();
  }, [dispatch, params.cityId]);

  const renderContent = (city: CityType) => (
    <Descriptions column={1}>
      <Descriptions.Item label='Population'>
        {formatNumber(city.population)} people
      </Descriptions.Item>
      <Descriptions.Item label='Longitude'>{city.location.latlon.longitude}</Descriptions.Item>
      <Descriptions.Item label='Latitude'>{city.location.latlon.latitude}</Descriptions.Item>
    </Descriptions>
  );

  return (
    <>
      {city && (
        <PageHeader
          className='site-page-header-responsive'
          onBack={() => window.history.back()}
          title={city.full_name}
        >
          {renderContent(city)}
        </PageHeader>
      )}
    </>
  );
};

export default City;
