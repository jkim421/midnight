import React from 'react';
import ListItem from './list_item';
import { LIST_CATEGORIES } from '../../selectors/defined_tags';
import FilterBarContainer from '../filter_bar/filter_bar_container';

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

  showList(shows) {
    return (
      shows.map(show => {
        return <ListItem show={ show } key={ show.id }/>
      })
    )
  }

  render() {
    const { categories, genres, shows } = this.props;
    return (
      <>
        <FilterBarContainer />
        <div>
          { this.props.categories.map(cat => LIST_CATEGORIES[cat]) }
        </div>
        <div className="ResultsList-container">
          <ul className="ResultsList-ul">
            { this.showList(shows) }
          </ul>
        </div>
      </>
    )
  }
}

export default ResultsList;
