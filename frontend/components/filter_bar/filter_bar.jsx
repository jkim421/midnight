import React from 'react';
import { LIST_CATEGORIES } from '../../selectors/defined_tags';
import ListCheckbox from './list_checkbox';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.checkedBox = this.checkedBox.bind(this);
    this.renderListCheckboxes = this.renderListCheckboxes.bind(this);
  }

  checkedBox(num) {
    debugger
    return this.props.categories.includes(parseInt(num));
  }

  handleCheck(id) {
    debugger
    if (this.props.categories.includes(id)) {
      this.props.removeCategory(id);
    } else {
      this.props.addCategory(id);
    }
  }

  renderListCheckboxes() {
    const listIds = [6, 1, 2, 3, 4];

    return listIds.map( listId => (
        <ListCheckbox
          key={ listId }
          listId={ listId }
          listName={ LIST_CATEGORIES[listId] }
          checkedBox={ this.checkedBox }
          handleCheck={ () => this.handleCheck(listId) }/>
      )
    )
  }

  render() {
    return (
      <div className="FilterBar-container">
        <div className="FilterBar-lists">
          { this.renderListCheckboxes() }
        </div>
      </div>
    )
  }
}

export default FilterBar;
