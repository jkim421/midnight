import React from 'react';

class FiltersCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkedBox = this.checkedBox.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  checkedBox(option) {
    if (this.props.options.includes(option)) {
      return "FilterBar-option-selected";
    } else {
      return "";
    }
  }

  handleSelect(option) {
    if (this.props.options.includes(option)) {
      this.props.removeSelection(option);
    } else {
      this.props.addSelection(option);
    }
  }

  render() {
    const { optionName } = this.props;
    return (
      <div
        className={`FilterBar-option-div ${this.checkedBox(optionName)}`}
        onClick= { () => this.handleSelect(optionName) }
      >
        { optionName }
      </div>
    )
  }
};

export default FiltersCheckbox;
