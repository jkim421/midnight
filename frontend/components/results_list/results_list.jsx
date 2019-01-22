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
      category,
      completed,
      dropped,
      onHold,
      planToWatch,
      watching
    } = this.props;

    return (
      <ul>
        { this.showList(this.props[category]) }
      </ul>
    )
  }
}

export default ResultsList;
