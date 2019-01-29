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
    return this.props.categories.includes(parseInt(num));
  }

  handleCheck(id) {
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
          checkedBox={ this.checkedBox }
          handleCheck={ () => this.handleCheck(categoryId) }/>
      )
    )
  }

  render() {
    return (
      <div className="FilterBar-container">
        <div className="FilterBar-categories">
          { this.renderCategoryCheckboxes() }
        </div>
      </div>
    )
  }
}

export default FilterBar;
