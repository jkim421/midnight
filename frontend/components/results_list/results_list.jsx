import React from 'react';
import ListItem from './list_item';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      page: 1,
      list: [],
      searching: false,
    };
  }

  showList(category) {
    return (
      category.map( show => {
        return <ListItem show={ show } key={ show.id }/>
      })
    )
  }

  render() {
    const {
      completed,
      dropped,
      onHold,
      planToWatch,
      watching
    } = this.props;

    return (
      <ul>
        { this.showList(this.props['completed']) }
      </ul>
    )
  }
}

export default ResultsList;
