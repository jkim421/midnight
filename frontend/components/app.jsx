import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';

const App = () => {
  return (
    <div className="main-body">
      <HomePageContainer />
    </div>
  );
};

export default App;
