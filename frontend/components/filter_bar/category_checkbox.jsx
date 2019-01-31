import React from 'react';
import { PulseLoader } from 'react-spinners';

class CategoryCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.categories.includes(this.props.categoryId),
    }
    this.checkedBox = this.checkedBox.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  checkedBox(id) {
    if (this.props.categories.includes(this.props.categoryId)) {
      return "FilterBar-option-selected";
    } else {
      return "";
    }
  }

  handleCategory() {
    const { categoryId, categories } = this.props;

    if (categories.includes(categoryId)) {
      this.props.removeCategory(categoryId);
    } else {
      this.props.addCategory(categoryId);
    }
  }

  render() {
    const { categoryId, categoryName } = this.props;

    return (
      <div
        className={`FilterBar-option-div ${this.checkedBox(categoryId)}`}
        onClick= { () => this.handleCategory(categoryId) }
        ref={this.container}
      >
        { categoryName }
      </div>
    )
  }
};

export default CategoryCheckbox;
