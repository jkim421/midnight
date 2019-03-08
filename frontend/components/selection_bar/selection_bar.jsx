import React from 'react';

class SelectionBar extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      1: "All",
      2: "Selected",
      3: "Not Selected"
    };
    this.handleSelectClick = this.handleSelectClick.bind(this);
    this.selectionBody = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleSelectClick);
    this.selectionBtn = document.getElementById("Header-selection");
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleSelectClick);
  }

  handleSelectClick(e) {
    if (this.selectionBtn.contains(e.target) ||
    this.selectionBody.current.contains(e.target) ||
    (!this.selectionBody.current.contains(e.target) && !this.props.selectionOpen)) {
      return;
    } else {
      this.toggleSelection();
    }
  }

  toggleSelection() {
    this.props.toggleSelection();
    this.selectionBtn.classList.toggle("Header-sort-selected");
  }

  selectionStyle() {
    return this.props.selectionOpen ? "SortBar-body-open" : "SortBar-body-closed";
  }

  currentSelect(selectNum) {
    if (this.props.selectionDisplay === selectNum) {
      return "SortSelect-option-selected";
    }
  }

  renderRows() {
    return Object.keys(this.options).map( id => {
      return (
        <div
          key={ id }
          className={`SortSelect-option SelectionBar-option ${ this.currentSelect(id) }`}
          onClick={ () => this.props.updateSelection(id) }
          >
          <div className="SortBar-option-type">
            { this.options[id] }
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div
        className={`SelectionBar-container ${ this.selectionStyle() }`}
        ref={ this.selectionBody }
      >
        { this.renderRows() }
        <div className="SelectionBar-spacer"/>
        <div className="SortSelect-option SelectionBar-reset">
          <div
            className="SelectionBar-reset-btn"
            onClick={ this.props.resetSelection }
          >
            Reset
          </div>
        </div>
      </div>
    )
  }
}

export default SelectionBar;
