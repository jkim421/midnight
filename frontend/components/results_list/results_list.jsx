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

  /* DELETE FOR PRODUCTION */
  mostGenres() {
    const {
      completed,
      dropped,
      onHold,
      planToWatch,
      watching
    } = this.props;

    const list = completed.concat(dropped, onHold, planToWatch, watching);

    let maxCount = 0;

    for (let i = 0; i < list.length; i++) {
      let currCount = list[i].genres.length;

      if (currCount > maxCount) {
        maxCount = currCount;
      }
    }

    return maxCount;
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
      <>
        <div>
          { this.mostGenres() }
        </div>
        <ul>
          { this.showList(this.props[category]) }
        </ul>
      </>
    )
  }
}

export default ResultsList;
