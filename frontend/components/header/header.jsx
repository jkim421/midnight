import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import FilterBarContainer from '../filter_bar/filter_bar_container';
import SortBarContainer from '../sort_bar/sort_bar_container';
import SelectionBarContainer from '../selection_bar/selection_bar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterLeft: 0,
      sortLeft: 0,
      selectionLeft: 0,
    }
    this.filterBtn = React.createRef();
    this.sortBtn = React.createRef();
    this.selectionBtn = React.createRef();
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePosition);
    this.setState({
      filterLeft: this.filterBtn.current.offsetLeft,
      sortLeft: this.sortBtn.current.offsetLeft,
      selectionLeft: this.selectionBtn.current.offsetLeft,
    })
  }

  componentDidUpdate(oldProps) {
    if (
      window.matchMedia("(max-width: 800px)").matches &&
      this.state.filterLeft !== 0) {
      this.setState({
        filterLeft: 0,
        sortLeft: 0,
        selectionLeft: 0,
      })
    } else if (
      ((oldProps.showNum === 0 || this.props.showNum === 0) &&
      (oldProps.showNum !== this.props.showNum) &&
      !window.matchMedia("(max-width: 800px)").matches) ||
      (oldProps.isVerticalScroll !== this.props.isVerticalScroll) ||
      (oldProps.showNum !== this.props.showNum)) {
        this.updatePosition();
    }
  }

  updatePosition() {
    this.setState({
      filterLeft: this.filterBtn.current.offsetLeft,
      sortLeft: this.sortBtn.current.offsetLeft,
      selectionLeft: this.selectionBtn.current.offsetLeft,
    });
  }

  handleFilter() {
    if (this.props.sortOpen) {
      this.toggleSort();
    } else if (this.props.selectionOpen) {
      this.toggleSelection();
    }
    this.toggleFilter();
  }

  handleSort() {
    if (this.props.filterOpen) {
      this.toggleFilter();
    } else if (this.props.selectionOpen) {
      this.toggleSelection();
    }
    this.toggleSort();
  }

  handleSelection() {
    if (this.props.filterOpen) {
      this.toggleFilter();
    } else if (this.props.sortOpen) {
      this.toggleSort();
    }
    this.toggleSelection();
  }

  toggleFilter() {
    this.props.toggleFilter();
    this.filterBtn.current.classList.toggle("Header-filter-selected")
  }

  toggleSort() {
    this.props.toggleSort();
    this.sortBtn.current.classList.toggle("Header-sort-selected")
  }

  toggleSelection() {
    this.props.toggleSelection();
    this.selectionBtn.current.classList.toggle("Header-sort-selected")
  }

  render() {
    return (
      <>
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
        <div
          className="Header-sort"
          style={{
            left: this.state.selectionLeft
          }}
          >
          <SelectionBarContainer />
        </div>
        <div className="Header-container">
          <div
            className="Header-body"
          >
            <div className="Header-actions">
              <a
                className="Header-item Header-title"
                href="/"
              >
                midnite
              </a>
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
                id="Header-selection"
                className="Header-item Header-sort-btn"
                ref={ this.selectionBtn }
                onClick={ this.handleSelection }
                >
                selection
              </div>
            </div>
            <div className="Header-item Header-search">
              <SearchBarContainer usernameParam={this.props.usernameParam}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header;
