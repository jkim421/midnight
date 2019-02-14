import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 1,
      score: 4,
      start: 6,
      end: 8,
    }
    this.handleSortClick = this.handleSortClick.bind(this);
    this.sortBody = this.sortBody.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleSortClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleSortClick);
  }

  handleSortClick(e) {
    if ((this.sortBody.current.contains(e.target)) ||
    (!this.sortBody.current.contains(e.target) && !this.props.sortOpen)) {
      return;
    } else {
      this.props.toggleSort();
    }
  }

  toggleSort() {
    this.props.toggleSort();
  }

  sortStyle() {
    return this.props.sortOpen ? "SortBar-body-open" : "SortBar-body-closed";
  }

  currentSort(sortNum) {
    if (this.props.sort === sortNum || this.props.sort === sortNum + 1) {
      return "SortBar-option-selected";
    }
  }

  renderTitle() {
    if (this.state.title === 1) {
      return "A-Z";
    } else {
      return "Z-A";
    }
  }

  renderSymbol(type, num) {
    if (this.state[type] === num) {
      return "\u2191";
    } else {
      return "\u2193";
    }  }

  handleSort(type) {
    const sort = this.props.sort;

    if (type === "title") {
      this.selectSort(type, 1, 2);
    } else if (type === "score") {
      this.selectSort(type, 3, 4);
    } else if (type === "start") {
      this.selectSort(type, 5, 6);
    } else if (type === "end") {
      this.selectSort(type, 7, 8);
    }
  }

  selectSort(type, a, b) {
    const sort = this.props.sort;
    if (sort === a || sort === b) {
      sort === a ?
        this.setState({[type]: b}, () => this.props.updateSort(b)) :
        this.setState({[type]: a}, () => this.props.updateSort(a));
    } else {
      this.state[type] === a ?
        this.setState({[type]: a}, () => this.props.updateSort(a)) :
        this.setState({[type]: b}, () => this.props.updateSort(b));
    }
  }

  render() {
    return (
      <div
        className={`SortBar-container ${ this.sortStyle() }`}
        ref={ this.sortBody }
      >
        <div
          className={`SortBar-option ${ this.currentSort(1) }`}
          onClick={ () => this.handleSort("title") }
        >
          <span className="SortBar-option-type">
            Title
          </span>
          <span className="SortBar-option-sym">
            { this.renderTitle() }
          </span>
        </div>
        <div
          className={`SortBar-option ${ this.currentSort(3) }`}
          onClick={ () => this.handleSort("score") }
        >
          <span className="SortBar-option-type">
            Score
          </span>
          <span className="SortBar-option-sym">
            { this.renderSymbol("score", 3) }
          </span>
        </div>
        <div
          className={`SortBar-option ${ this.currentSort(5) }`}
          onClick={ () => this.handleSort("start") }
        >
          <span className="SortBar-option-type">
            Start Yr
          </span>
          <span className="SortBar-option-sym">
            { this.renderSymbol("start", 5) }
          </span>
        </div>
        <div
          className={`SortBar-option ${ this.currentSort(7) }`}
          onClick={ () => this.handleSort("end") }
        >
        <span className="SortBar-option-type">
          End Yr
        </span>
        <span className="SortBar-option-sym">
          { this.renderSymbol("end", 7) }
        </span>
        </div>
      </div>
    )
  }
}

export default SortBar;
