import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import FilterBarContainer from '../filter_bar/filter_bar_container';
import SortBarContainer from '../sort_bar/sort_bar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.filterBtn = React.createRef();
    this.sortBtn = React.createRef();
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

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
      <>
        <div className="Header-container">
          <div className="Header-item Header-title ">
            midnight
          </div>
          <div className="Header-item Header-search">
            <SearchBarContainer />
          </div>
          <div
            className="Header-item Header-filter-btn"
            ref={ this.filterBtn }
            onClick={ this.handleFilter }
          >
            filter
          </div>
          <div
            className="Header-item Header-sort-btn"
            ref={ this.sortBtn }
            onClick={ this.handleSort }
          >
            sort
          </div>
        </div>
        <div className="Header-filter">
          <FilterBarContainer />
        </div>
        <div className="Header-sort">
          <SortBarContainer />
        </div>
      </>
    )
  }
}

export default Header;
