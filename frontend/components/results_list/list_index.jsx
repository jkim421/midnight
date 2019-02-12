import React from 'react';
import ListItemContainer from './list_item_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.showList = this.showList.bind(this);
  }

  showList(shows) {
    return (
      shows.map(show => {
        return <ListItemContainer show={ show } key={ show.id }/>
      })
    )
  }

  render() {
    const { shows } = this.props;
    return (
      <div className="ResultsList-container">
        <ul className="ResultsList-ul">
          { this.showList(shows) }
        </ul>
      </div>
    )
  }
}

export default ListIndex;
