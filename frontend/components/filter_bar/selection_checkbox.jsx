import React from 'react';

class SelectionCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkedBox = this.checkedBox.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  checkedBox(option) {
    if (this.props.selectionDisplay === option) {
      return "FilterBar-option-selected";
    } else {
      return "";
    }
  }

  handleSelect(option) {
    this.props.updateSelection(option);
  }

  render() {
    const { optionId, optionName } = this.props;
    return (
      <div
        className={`FilterBar-option-div ${this.checkedBox(optionId)}`}
        onClick= { () => this.handleSelect(optionId) }
      >
        { optionName }
      </div>
    )
  }
};

export default SelectionCheckbox;
