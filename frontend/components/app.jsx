import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';
import HeaderContainer from './header/header_container';
import ResultsListContainer from './results_list/results_list_container';

const App = () => {
  return (
    <>
      <Route path="/:username" component={ HeaderContainer } />
      <div className="main-body">
        <Switch>
          <Route exact path="/" component={ HomePageContainer } />
          <Route path="/:username" component = { ResultsListContainer } />
        </Switch>
      </div>
    </>
  );
};

export default App;
