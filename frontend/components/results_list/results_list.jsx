import React from 'react';
import ListItem from './list_item';
import { CATEGORIES } from '../../selectors/defined_tags';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      page: 1,
      searching: false,
    };
    this.showList = this.showList.bind(this);
  }

  showList(categories) {
    let shows = [];
    categories.forEach(list => shows = shows.concat(this.props[list]));
    return (
      shows.map(show => {
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
      let currCount = list[i].genres ? list[i].genres.length : 0;

      if (currCount > maxCount) {
        maxCount = currCount;
      }
    }

    return maxCount;
  }

  render() {
    const {
      categories,
      completed,
      dropped,
      onHold,
      planToWatch,
      watching
    } = this.props;

    return (
      <>
        <div>
          Max genres: { this.mostGenres() }
        </div>
        <div>
          { CATEGORIES[this.props.categories] }
        </div>
        <ul className="ResultsList-ul">
          { this.showList(this.props.categories) }
        </ul>
      </>
    )
  }
}

export default ResultsList;
