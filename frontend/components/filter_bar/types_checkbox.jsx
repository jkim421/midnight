import React from 'react';

class TypesCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkedBox = this.checkedBox.bind(this);
    this.handleType = this.handleCategory.bind(this);
  }

  checkedBox(type) {
    if (this.props.types.includes(type)) {
      return "FilterBar-category-selected";
    } else {
      return "";
    }
  }

  handleType(type) {
    if (this.props.types.includes(type)) {
      this.props.removeCategory(type);
    } else {
      this.props.addCategory(type);
    }
  }

  render() {
    const { categoryId } = this.props;
    return (
      <div
        className={`FilterBar-categories-div ${this.checkedBox(categoryId)}`}
        type="checkbox"
        onClick= { () => this.handleCategory(categoryId) }
      >
        { this.props.categoryName }
      </div>
    )
  }
};

export default TypesCheckbox;
