import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  render() {
    return (
      <div>
        <h1 className="HomePage-title">midnight</h1>
        <SearchBarContainer />
      </div>
    )
  }
}

export default HomePage;
