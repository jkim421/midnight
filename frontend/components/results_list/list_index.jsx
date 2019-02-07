import React from 'react';
import ListItem from './list_item';

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
        return <ListItem show={ show } key={ show.id }/>
      })
    )
  }

  render() {
    const { shows } = this.props;
    debugger
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
