import React from 'react';
import HeaderContainer from '../header/header_container';
import ListIndexContainer from './list_index_container';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div
        id="ResultsList"
        className="ResultsList-container"
      >
        <ListIndexContainer />
      </div>
    )
  }
}

export default ResultsList;
