import React from 'react';
import ListItem from './list_item';
import { LIST_CATEGORIES } from '../../selectors/defined_tags';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      page: 1,
      searching: false,
    };
    
    this.lists = LIST_CATEGORIES;
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
        <div>
          { this.props.categories.map(cat => LIST_CATEGORIES[cat]) }
        </div>
        <ul className="ResultsList-ul">
          { this.showList(shows) }
        </ul>
      </>
    )
  }
}

export default ResultsList;
