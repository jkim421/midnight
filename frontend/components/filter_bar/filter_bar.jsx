import React from 'react';
import {
  LIST_CATEGORIES,
  TYPES,
  RATINGS } from '../../selectors/defined_tags';
import SelectionCheckboxContainer from './selection_checkbox_container';
import CategoryCheckboxContainer from './category_checkbox_container';
import TypesCheckboxContainer from './types_checkbox_container';
import RatingsCheckboxContainer from './ratings_checkbox_container';
import ScoresSliderContainer from './scores_slider_container';
import GenresRow from './genres_row';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.filterBody = React.createRef();
  }

  componentDidMount() {
    this.filterBtn = document.getElementById("Header-filter");
    document.addEventListener('mousedown', this.handleFilterClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleFilterClick);
  }

  handleFilterClick(e) {
    if (this.filterBtn.contains(e.target) ||
    this.filterBody.current.contains(e.target) ||
    (!this.filterBody.current.contains(e.target) && !this.props.filterOpen)) {
      return;
    } else {
      this.toggleFilter();
    }
  }

  toggleFilter() {
    this.props.toggleFilter();
    this.filterBtn.classList.toggle("Header-filter-selected");
  }

  filterStyle() {
    return this.props.filterOpen ? "FilterBar-body-open" : "FilterBar-body-closed";
  }

  renderSelection() {
    const options = {
      1: "All",
      2: "Selected",
      3: "Not Selected"
    };

    return Object.keys(options).map( id => (
      <SelectionCheckboxContainer
        key={ id }
        optionId={ id }
        optionName={ options[id] }
      />
    ));
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

  insertSelectionRow() {
    return (
      <>
        <div className="FilterBar-filter">
          <div className="FilterBar-title FilterBar-titles-selection">
            Selection
          </div>
          <div className="FilterBar-options-row">
            { this.renderSelection() }
            <div className="FilterBar-reset-container">
              <div
                className="FilterBar-option-reset FilterBar-reset"
                onClick = { this.props.resetSelection }
                >
                Reset
              </div>
            </div>
            <div className="FilterBar-option-empty" />
          </div>
        </div>
        <div className="FilterBar-border"/>
      </>
    )
  }

  render() {
    return (
      <div className="FilterBar-container">
        <div
          className={`${this.filterStyle()}`}
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
              MAL
            </div>
            <div className="FilterBar-slider-row">
              <ScoresSliderContainer />
            </div>
          </div>
          <div className="FilterBar-border"/>
          <div className="FilterBar-filter">
            <div className="FilterBar-title FilterBar-title-genres">
              Genres
              <span
                className="FilterBar-reset"
                onClick={ this.props.resetGenre }>
                Reset
              </span>
            </div>
            <div className="FilterBar-options-row FilterBar-genre-row">
              { <GenresRow /> }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterBar;
