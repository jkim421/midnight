import React from 'react';

class CategoryCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkedBox = this.checkedBox.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  checkedBox(id) {
    if (this.props.categories.includes(parseInt(id))) {
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
