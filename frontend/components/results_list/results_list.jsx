import React from 'react';
import FilterBarContainer from '../filter_bar/filter_bar_container';
import ListIndexContainer from './list_index_container';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <FilterBarContainer />
        <ListIndexContainer />
      </>
    )
  }
}

export default ResultsList;
