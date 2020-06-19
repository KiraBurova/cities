import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { List } from 'antd';

import { store } from '../../store/store';

import { SearchedCity } from './types';

import { getIdFromLink } from '../../helpers';

const Cities = (): React.ReactElement => {
  const globalState = useContext(store);
  const {
    state: { cities, loading },
  } = globalState;

  return (
    <List
      style={{ maxHeight: 500, overflowY: 'auto' }}
      size='small'
      bordered
      dataSource={cities}
      loading={loading}
      renderItem={(item: SearchedCity): React.ReactElement => (
        <List.Item>
          <Link to={`/search/${getIdFromLink(item._links['city:item'].href)}`}>
            {item.matching_full_name}
          </Link>
        </List.Item>
      )}
    />
  );
};

export default Cities;
