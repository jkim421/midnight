import React from 'react';
import {
  LIST_CATEGORIES,
  TYPES } from '../../selectors/defined_tags';
import CategoryCheckboxContainer from './category_checkbox_container';
import TypesCheckboxContainer from './types_checkbox_container';
import ScoresSliderContainer from './scores_slider_container';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
          typeName={ type }/>
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
            <div className="FilterBar-options-row">
              { this.renderCategories() }
            </div>
          </div>
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              Type
            </div>
            <div className="FilterBar-options-row">
              { this.renderTypes() }
            </div>
          </div>
          <div className="FilterBar-filter">
            <div className="FilterBar-title">
              Score
            </div>
            <div className="FilterBar-slider-container">
              <div className="FilterBar-score-range">
                { this.props.scores[0] }-{ this.props.scores[1] }
              </div>
              <div className="FilterBar-slider" id="aweb">
                <ScoresSliderContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterBar;
