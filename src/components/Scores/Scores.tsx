import React, { useEffect, useState, useContext } from 'react';

import { Typography, Divider } from 'antd';

import { Bar } from 'react-chartjs-2';

import { store } from '../../store/store';
import { ChartData } from './types';

import styles from './Scores.module.scss';

const { Paragraph } = Typography;

const Scores = (): React.ReactElement => {
  const globalState = useContext(store);
  const [chartData, setChartData] = useState({});
  const {
    state: { stats },
  } = globalState;
  useEffect(() => {
    const categories = stats.scores.categories;
    const transformedChartData: ChartData = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          borderColor: '',
          borderWidth: 0,
        },
      ],
    };
    const chartData = categories.reduce((prev, curr): ChartData => {
      return {
        labels: prev.labels.concat(curr.name),
        datasets: [
          {
            data: prev.datasets
              .map((item): Array<number> => item.data.concat(curr.score_out_of_10))
              .flat(),
            backgroundColor: prev.datasets
              .map((item): Array<string> => item.backgroundColor.concat(curr.color))
              .flat(),
            borderColor: 'black',
            borderWidth: 1,
          },
        ],
      };
    }, transformedChartData);
    setChartData(chartData);
  }, [stats.scores.categories]);
  return (
    <>
      <div className={styles.summaryHolder}>
        <Typography>
          <Paragraph>
            {stats.scores.summary && (
              <div dangerouslySetInnerHTML={{ __html: stats.scores.summary }}></div>
            )}
          </Paragraph>
        </Typography>
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Scores of the city',
              fontSize: 24,
              fontColor: 'black',
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
      <Divider />
    </>
  );
};

export default Scores;
