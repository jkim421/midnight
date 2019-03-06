import React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 1,
      score: 4,
      user: 6,
      start: 8,
      end: 10,
    }
    this.handleSortClick = this.handleSortClick.bind(this);
    this.sortBody = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleSortClick);
    this.sortBtn = document.getElementById("Header-sort");
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleSortClick);
  }

  handleSortClick(e) {
    if (this.sortBtn.contains(e.target) ||
    this.sortBody.current.contains(e.target) ||
    (!this.sortBody.current.contains(e.target) && !this.props.sortOpen)) {
      return;
    } else {
      this.toggleSort();
    }
  }

  toggleSort() {
    this.props.toggleSort();
    this.sortBtn.classList.toggle("Header-sort-selected");
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
      return "\u25B2";
    } else {
      return "\u25BC";
    }  }

  handleSort(type) {
    const sort = this.props.sort;

    if (type === "title") {
      this.selectSort(type, 1, 2);
    } else if (type === "score") {
      this.selectSort(type, 3, 4);
    } else if (type === "user_score") {
      this.selectSort(type, 5, 6);
    } else if (type === "start") {
      this.selectSort(type, 7, 8);
    } else if (type === "end") {
      this.selectSort(type, 9, 10);
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
          <span className="SortBar-option-title">
            { this.renderTitle() }
          </span>
        </div>
        <div
          className={`SortBar-option ${ this.currentSort(3) }`}
          onClick={ () => this.handleSort("score") }
        >
          <span className="SortBar-option-type">
            MAL Score
          </span>
          <span className="SortBar-option-sym">
            { this.renderSymbol("score", 3) }
          </span>
        </div>
        <div
          className={`SortBar-option ${ this.currentSort(5) }`}
          onClick={ () => this.handleSort("user_score") }
        >
          <span className="SortBar-option-type">
            User Score
          </span>
          <span className="SortBar-option-sym">
            { this.renderSymbol("user_score", 5) }
          </span>
        </div>
        <div
          className={`SortBar-option ${ this.currentSort(7) }`}
          onClick={ () => this.handleSort("start") }
        >
          <span className="SortBar-option-type">
            Start Yr
          </span>
          <span className="SortBar-option-sym">
            { this.renderSymbol("start", 7) }
          </span>
        </div>
        <div
          className={`SortBar-option ${ this.currentSort(9) }`}
          onClick={ () => this.handleSort("end") }
        >
        <span className="SortBar-option-type">
          End Yr
        </span>
        <span className="SortBar-option-sym">
          { this.renderSymbol("end", 9) }
        </span>
        </div>
      </div>
    )
  }
}

export default SortBar;
