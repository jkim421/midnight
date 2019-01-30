import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import { PulseLoader } from 'react-spinners';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h1 className="HomePage-title">midnight</h1>
        <SearchBarContainer />
        <PulseLoader />
      </div>
    )
  }
}

export default HomePage;
