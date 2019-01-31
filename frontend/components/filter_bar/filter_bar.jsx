import React from 'react';
import {
  LIST_CATEGORIES,
  TYPES,
  RATINGS } from '../../selectors/defined_tags';
import CategoryCheckboxContainer from './category_checkbox_container';
import TypesCheckboxContainer from './types_checkbox_container';
import RatingsCheckboxContainer from './ratings_checkbox_container';
import ScoresSliderContainer from './scores_slider_container';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.sizeBar = this.sizeBar.bind(this);
    this.filterBody = React.createRef();
  }

  sizeBar() {
    this.setState({ open: !this.state.open},
      () => {
        if (this.state.open) {
          this.filterBody.current.style.visibility = "hidden";
          this.filterBody.current.style.height = "0";
        } else {
          this.filterBody.current.style.visibility = "visible";
          this.filterBody.current.style.height = "";
        }
      }
    )

  }

  renderIcon() {
    if (this.state.open) {
      return <i className="fas fa-minus"></i>;
    } else {
      return <i className="fas fa-plus"></i>;
    }
  }

  renderCategories() {
    const listIds = [6, 1, 2, 3, 4];

    return listIds.map( categoryId => (
        <CategoryCheckboxContainer
          key={ categoryId }
          categoryId={ categoryId }
          categoryName={ LIST_CATEGORIES[categoryId] }/>
      )
    )
  }

  renderTypes() {
    return TYPES.map( type => (
        <TypesCheckboxContainer
          key={ type }
          optionName={ type }/>
      )
    )
  }
  renderRatings() {
    return RATINGS.map( rating => (
        <RatingsCheckboxContainer
          key={ rating }
          optionName={ rating }/>
      )
    )
  }

  render() {
    return (
      <div className="FilterBar-container">
        <div className="FilterBar-header">
          <div className="FilterBar-sizer"
            onClick={ this.sizeBar }
          >
            { this.renderIcon() }
          </div>
          <div className="FilterBar-header-title">
            Filter
          </div>
        </div>
        <div
          className="FilterBar-body"
          ref={ this.filterBody }
        >
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              List
            </div>
            <div className="FilterBar-options-row">
              { this.renderCategories() }
            </div>
          </div>
          <div className="FilterBar-border"/>
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              Type
            </div>
            <div className="FilterBar-options-row">
              { this.renderTypes() }
            </div>
          </div>
          <div className="FilterBar-border"/>
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              Rating
            </div>
            <div className="FilterBar-options-row">
              { this.renderRatings() }
            </div>
          </div>
          <div className="FilterBar-border"/>
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              Score
            </div>
            <div className="FilterBar-slider-row">
              <ScoresSliderContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterBar;
