import React from 'react';
import { LIST_CATEGORIES } from '../../selectors/defined_tags';
import CategoryCheckbox from './category_checkbox';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.checkedBox = this.checkedBox.bind(this);
    this.renderCategoryCheckboxes = this.renderCategoryCheckboxes.bind(this);
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

  renderCategoryCheckboxes() {
    const listIds = [6, 1, 2, 3, 4];

    return listIds.map( categoryId => (
        <CategoryCheckbox
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
        <div className="FilterBar-filter">
          <div className="FilterBar-categories-title">
            List Type
          </div>
          <div className="FilterBar-categories-options">
            { this.renderCategoryCheckboxes() }
          </div>
        </div>
        <div className="FilterBar-filter">
          <div className="FilterBar-score-title">
            Score
          </div>
        </div>
      </div>
    )
  }
}

export default FilterBar;
