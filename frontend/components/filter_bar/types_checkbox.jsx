import React from 'react';

class TypesCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkedBox = this.checkedBox.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  checkedBox(type) {
    if (this.props.types.includes(type)) {
      return "FilterBar-option-selected";
    } else {
      return "";
    }
  }

  handleType(type) {
    const types = this.props.types;
    if (types.includes(type)) {
      this.props.removeType(type);
    } else {
      this.props.addType(type);
    }
  }

  render() {
    const { typeName } = this.props;
    return (
      <div
        className={`FilterBar-option-div ${this.checkedBox(typeName)}`}
        onClick= { () => this.handleType(typeName) }
      >
        { this.props.typeName }
      </div>
    )
  }
};

export default TypesCheckbox;
