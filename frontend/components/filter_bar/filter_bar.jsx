import React from 'react';
import { LIST_CATEGORIES } from '../../selectors/defined_tags';
import CategoryCheckbox from './category_checkbox';
import CategoryCheckboxContainer from './category_checkbox_container';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.checkedBox = this.checkedBox.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  checkedBox(num) {
    if (this.props.categories.includes(parseInt(num))) {
      return "FilterBar-category-selected";
    } else {
      return "";
    }
  }

  handleCategory(id) {
    if (this.props.categories.includes(id)) {
      this.props.removeCategory(id);
    } else {
      this.props.addCategory(id);
    }
  }

  renderCategories() {
    const listIds = [6, 1, 2, 3, 4];

    return listIds.map( categoryId => (
        <CategoryCheckboxContainer
          key={ categoryId }
          categoryId={ categoryId }
          categoryName={ LIST_CATEGORIES[categoryId] }
          selected={ this.checkedBox(categoryId) }
          handleCategory={ () => this.handleCategory(categoryId) }/>
      )
    )
  }

  renderTypes() {
    return listIds.map( categoryId => (
        <CategoryCheckboxContainer
          key={ categoryId }
          categoryId={ categoryId }
          categoryName={ LIST_CATEGORIES[categoryId] }
          selected={ this.checkedBox(categoryId) }
          handleCategory={ () => this.handleCategory(categoryId) }/>
      )
    )
  }

  render() {
    return (
      <div className="FilterBar-container">
        <div className="FilterBar-sizer">
          <i className="fas fa-minus"></i>
        </div>
        <div className="FilterBar-filter-items">
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              List
            </div>
            <div className="FilterBar-categories-options">
              { this.renderCategories() }
            </div>
          </div>
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              Type
            </div>
            <div className="FilterBar-type-options">
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default FilterBar;
