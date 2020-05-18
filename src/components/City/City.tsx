import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PageHeader, Descriptions } from 'antd';

import { API } from '../../constants';
import { ParamsType, CityType } from '../../types.ds';
import { formatNumber } from '../../helpers';

const City = (): React.ReactElement => {
  const params = useParams<ParamsType>();
  const [city, setCity] = useState<CityType | null>(null);

  useEffect(() => {
    const fetchCity = async () => {
      const result = await fetch(`${API}/cities/geonameid:${params.cityId}`);
      const data: CityType = await result.json();

      setCity(data);
    };

    fetchCity();
  }, [params.cityId]);

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
