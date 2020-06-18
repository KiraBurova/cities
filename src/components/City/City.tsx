import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { PageHeader, Descriptions } from 'antd';

import { API } from '../../constants';
import { ParamsType, CityType, ImagesType } from '../../types.ds';
import { formatNumber } from '../../helpers';
import { store } from '../../store/store';
import { ActionTypes } from '../../store/types';

import styles from './City.module.scss';

const City = (): React.ReactElement => {
  const params = useParams<ParamsType>();
  const [city, setCity] = useState<CityType | null>(null);
  const [images, setImages] = useState<ImagesType | null>(null);
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

      const imagesResult = await fetch(urbanArea._links['ua:images'].href);
      const images: ImagesType = await imagesResult.json();

      dispatch({ type: ActionTypes.SET_SCORES_DATA, scores: scores, images: images });

      setCity(city);
      setImages(images);
    };

    fetchCity();
  }, [dispatch, params.cityId]);

  const renderContent = (city: CityType, images: ImagesType) => (
    <>
      <Descriptions column={1}>
        <Descriptions.Item label='Population'>
          {formatNumber(city.population)} people
        </Descriptions.Item>
        <Descriptions.Item label='Longitude'>{city.location.latlon.longitude}</Descriptions.Item>
        <Descriptions.Item label='Latitude'>{city.location.latlon.latitude}</Descriptions.Item>
      </Descriptions>
      <div className={styles.imagesHolder}>
        {images.photos &&
          images.photos.map(
            (photo: any): React.ReactElement => (
              <img
                className={styles.image}
                src={photo.image.web}
                key={photo.image.web}
                alt='The city view'
              />
            ),
          )}
      </div>
    </>
  );

  return (
    <>
      {city && images && (
        <PageHeader
          className='site-page-header-responsive'
          onBack={() => window.history.back()}
          title={city.full_name}
        >
          {renderContent(city, images)}
        </PageHeader>
      )}
    </>
  );
};

export default City;
