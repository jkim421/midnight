import React from 'react';
import ListItemContainer from './list_item_container';
import { ClipLoader } from 'react-spinners';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      maxPages: Math.ceil(this.props.shows.length/20),
    };
    this.showList = this.showList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    this.props.endList();
  }

  componentDidUpdate(oldProps) {
    if (
      (this.props.shows.length !== oldProps.shows.length) ||
      (this.props.filters.sort !== oldProps.filters.sort)) {
      window.scrollTo(0, 0);
      this.setState({
        page: 1,
        maxPages: Math.ceil(this.props.shows.length/20)
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      (this.state.page !== nextState.page) ||
      (this.props.filters.sort !== nextProps.filters.sort)) {
      return true;
    } else if (this.props.shows.length === nextProps.shows.length) {
      return false;
    } else {
      return true;
    }
  }

  showList(shows) {
    const showsDisplay = shows.slice(0, 20 * this.state.page);

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
    if (
      (this.state.page !== this.state.maxPages) &&
      ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 20)
    ) {
      this.setState({
        page: this.state.page + 1
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
