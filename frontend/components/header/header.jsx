import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import FilterBarContainer from '../filter_bar/filter_bar_container';
import SortBarContainer from '../sort_bar/sort_bar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterLeft: 0,
      sortLeft: 0,
    }
    this.filterBtn = React.createRef();
    this.sortBtn = React.createRef();
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePosition);
    this.setState({
      filterLeft: this.filterBtn.current.offsetLeft,
      sortLeft: this.sortBtn.current.offsetLeft,
    })
  }

  componentDidUpdate(oldProps) {
    if (
      ((oldProps.showNum === 0 || this.props.showNum === 0) &&
      (oldProps.showNum !== this.props.showNum))) {
      this.updatePosition();
    }
  }

  updatePosition() {
    this.setState({
      filterLeft: this.filterBtn.current.offsetLeft,
      sortLeft: this.sortBtn.current.offsetLeft,
    });
  }

  handleFilter() {
    if (this.props.sortOpen) {
      this.toggleSort();
    }
    this.toggleFilter();
  }

  handleSort() {
    if (this.props.filterOpen) {
      this.toggleFilter();
    }
    this.toggleSort();
  }

  toggleFilter() {
    this.props.toggleFilter();
    this.filterBtn.current.classList.toggle("Header-filter-selected")
  }

  toggleSort() {
    this.props.toggleSort();
    this.sortBtn.current.classList.toggle("Header-sort-selected")
  }

  handleOutsideClickFilter() {
    this.props.toggleFilter();
  }

  handleOutsideClickSort() {
    this.props.toggleSort();
  }

  handleClick(e) {
    if (this.gearIcon.current.contains(e.target)) {
      return;
    }

    this.handleOutsideClick();
  }

  render() {
    return (
      <div className="Header-container">
        <div
          className="Header-body"
        >
          <div className="Header-item Header-title">
            midnight
          </div>
          <div
            id="Header-filter"
            className="Header-item Header-filter-btn"
            ref={ this.filterBtn }
            onClick={ this.handleFilter }
          >
            filter
          </div>
          <div
            id="Header-sort"
            className="Header-item Header-sort-btn"
            ref={ this.sortBtn }
            onClick={ this.handleSort }
          >
            sort
          </div>
          <div
            id="Header-roulette"
            className="Header-item Header-roulette-btn"
          >
            roulette
          </div>
          <div className="Header-item Header-search">
            <SearchBarContainer usernameParam={this.props.usernameParam}/>
          </div>
        </div>
        <div
          className="Header-filter"
          style={{
            left: this.state.filterLeft
          }}
        >
          <FilterBarContainer />
        </div>
        <div
          className="Header-sort"
          style={{
            left: this.state.sortLeft
          }}
        >
          <SortBarContainer />
        </div>
      </div>
    )
  }
}

export default Header;
