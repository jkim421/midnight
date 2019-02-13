import React from 'react';
import ListItemContainer from './list_item_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 1,
    };

    this.showList = this.showList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(oldProps) {
    if (this.props.shows !== oldProps.shows) {
      this.setState({
        pages: 1,
      })
    }
  }

  showList(shows) {
    const showsDisplay = shows.slice(0, 20 * this.state.pages);
    return (
      showsDisplay.map(show => {
        return <ListItemContainer show={ show } key={ show.id }/>;
      })
    )
  }

  handleScroll() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 20) {
      this.setState({
        pages: this.state.pages + 1
      })
    }
  }

  render() {
    const { shows } = this.props;
    return (
      <div className="ListIndex-container">
        <ul className="ListIndex-ul">
          { this.showList(shows) }
        </ul>
      </div>
    )
  }
}

export default ListIndex;
