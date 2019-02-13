import React from 'react';
import ListIndexContainer from './list_index_container';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="ResultsList-container">
        <ListIndexContainer />
      </div>
    )
  }
}

export default ResultsList;
