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

  shouldComponentUpdate(nextProps, nextState) {
    if (
      (this.state.pages !== nextState.pages) ||
      (this.props.filters.sort !== nextProps.filters.sort)) {
      return true;
    } else if (this.props.shows.length === nextProps.shows.length) {
      return false;
    } else {
      return true;
    }
  }

  showList(shows) {
    const showsDisplay = shows.slice(0, 20 * this.state.pages);

    return (
      showsDisplay.map(show => {
        return (
          <ListItemContainer
            show={ show }
            key={ show.id }
          />
        );
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
    if (shows.length === 0) {
      return (
        <div className="ListIndex-none">
          No Results
        </div>
      )
    }
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
