import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container.jsx';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h1>midnight</h1>
        <SearchBarContainer />
      </div>
    )
  }
}

export default HomePage;
