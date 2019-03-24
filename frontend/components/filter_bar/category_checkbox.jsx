import React from 'react';
import { PulseLoader } from 'react-spinners';

class CategoryCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.categories.includes(this.props.categoryId),
    }
  }

  checkedBox(id) {
    if (this.state.selected) {
      return "FilterBar-option-selected";
    } else {
      return "";
    }
  }

  handleClick() {
    const { categoryId, categories } = this.props;
    const isSelected = this.state.selected;
    this.setState({
      selected: !isSelected,
    }, () => {
      if (categories.includes(categoryId)) {
        this.props.removeCategory(categoryId);
      } else {
        this.props.addCategory(categoryId);
      }
    });
  }

  render() {
    const { categoryId, categoryName } = this.props;

    return (
      <div
        className={`FilterBar-option-div ${this.checkedBox(categoryId)}`}
        onClick= { () => this.handleClick(categoryId) }
        ref={this.container}
      >
        { categoryName }
      </div>
    )
  }
};

export default CategoryCheckbox;
