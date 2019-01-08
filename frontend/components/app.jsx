import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './home_page/home_page';

const App = () => {
  return (
    <div className="main-body">
      <HomePage />
    </div>
  );
};

export default App;
