import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from 'antd';

import SearchScreen from './screens/Search/Search.screen';
import CityScreen from './screens/City/City.screen';

import styles from './App.module.scss';

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Content style={{ flex: '1' }}>
        <Redirect from='/' to='list' />
        <Switch>
          <Route path='/list' component={SearchScreen} />
          <Route path='/search/:cityId' component={CityScreen} />
        </Switch>
      </Content>
      <Footer />
    </div>
  );
};

export default App;
