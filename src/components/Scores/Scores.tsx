import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Typography, Divider } from 'antd';
import { API } from '../../constants';
import { ParamsType, CityType } from '../../types.ds';
import { formatNumber } from '../../helpers';
import { store } from '../../store/store';
import { ActionTypes } from '../../store/types';

import styles from './Scores.module.scss';

const { Title, Paragraph, Text } = Typography;

const Scores = (): React.ReactElement => {
  const globalState = useContext(store);
  const {
    state: { stats },
  } = globalState;
  return (
    <>
      <div className={styles.summaryHolder}>
        <Typography>
          <Paragraph>
            <div dangerouslySetInnerHTML={{ __html: stats.scores.summary }}></div>
          </Paragraph>
        </Typography>
      </div>
      <Divider />
    </>
  );
};

export default Scores;
