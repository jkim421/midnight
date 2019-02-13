import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';
import HeaderContainer from './header/header_container';
import ResultsListContainer from './results_list/results_list_container';

const App = () => {
  return (
    <>
    <Route exact path="/list" component={ HeaderContainer } />
    <div className="main-body">
      <Route exact path="/" component={ HomePageContainer } />
      <Route path="/list" component = { ResultsListContainer } />
    </div>
    </>
  );
};

export default App;
