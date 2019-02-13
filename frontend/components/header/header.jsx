import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Header-container">
        <div className="Header-item Header-title ">
          midnight
        </div>
        <div className="Header-item Header-search">
          <SearchBarContainer />
        </div>
        <div className="Header-item Header-filter">
          filter
        </div>
        <div className="Header-item Header-sort">
          sort
        </div>
      </div>
    )
  }
}

export default Header;
