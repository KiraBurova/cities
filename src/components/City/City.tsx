import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { PageHeader, Descriptions, Spin } from 'antd';

import { API } from '../../constants';
import { ParamsType, CityType } from './types';
import { ImagesType, PhotosType } from '../../types';
import { formatNumber } from '../../helpers';
import { store } from '../../store/store';
import { ActionTypes } from '../../store/types';

import CityDetails from '../CityDetails';

import styles from './City.module.scss';

const City = (): React.ReactElement => {
  const params = useParams<ParamsType>();
  const [city, setCity] = useState<CityType | null>(null);
  const [images, setImages] = useState<ImagesType | null>(null);
  const {
    dispatch,
    state: { loading },
  } = useContext(store);

  useEffect(() => {
    const fetchCity = async () => {
      dispatch({ type: ActionTypes.LOADING, loading: true });

      const cityResult = await fetch(`${API}/cities/geonameid:${params.cityId}`);
      const city: CityType = await cityResult.json();

      const urbanResult = await fetch(city._links['city:urban_area'].href);
      const urbanArea = await urbanResult.json();

      const scoresResult = await fetch(urbanArea._links['ua:scores'].href);
      const scores = await scoresResult.json();

      const imagesResult = await fetch(urbanArea._links['ua:images'].href);
      const images: ImagesType = await imagesResult.json();

      dispatch({ type: ActionTypes.SET_SCORES_DATA, scores: scores, images: images });

      setCity(city);
      setImages(images);

      dispatch({ type: ActionTypes.LOADING, loading: false });
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
      {images.photos &&
        images.photos.map(
          (photo: PhotosType): React.ReactElement => (
            <img
              className={styles.image}
              src={photo.image.web}
              key={photo.image.web}
              alt='The city view'
            />
          ),
        )}
    </>
  );

  return (
    <>
      <Spin spinning={loading} size='large'>
        {city && images && (
          <PageHeader
            className='site-page-header-responsive'
            onBack={() => window.history.back()}
            title={city.full_name}
          >
            {renderContent(city, images)}
          </PageHeader>
        )}
        <CityDetails />
      </Spin>
    </>
  );
};

export default City;
