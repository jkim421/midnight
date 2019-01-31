import React from 'react';
import { PulseLoader } from 'react-spinners';

class CategoryCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleCategory(id) {
    const categories = this.props.categories;

    if (categories.includes(id)) {
      this.props.removeCategory(id);
    } else {
      this.props.addCategory(id);
    }
  }

  render() {
    const { categoryId, categoryName } = this.props;
    if (this.props.loading) { return <PulseLoader /> };
    return (
      <div
        className={`FilterBar-option-div ${this.checkedBox(categoryId)}`}
        onClick= { () => this.handleCategory(categoryId) }
      >
        { categoryName }
      </div>
    )
  }
};

export default CategoryCheckbox;
