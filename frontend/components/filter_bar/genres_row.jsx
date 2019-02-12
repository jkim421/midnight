import React from 'react';
import { PulseLoader } from 'react-spinners';
import GenreCheckboxContainer from './genre_checkbox_container'
import {
  GENRES_MAIN,
  GENRES_DEMO,
  GENRES_THEME,
  GENRES_ADULT, } from '../../selectors/defined_tags';

class GenresRow extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMain() {
    return GENRES_MAIN.map( genreName => (
        <GenreCheckboxContainer
          key={ genreName }
          genreName={ genreName }
        />
      )
    )
  }

  renderDemos() {
    return GENRES_DEMO.map( genreName => (
        <GenreCheckboxContainer
          key={ genreName }
          genreName={ genreName }
        />
      )
    )
  }

  renderThemes() {
    return GENRES_THEME.map( genreName => (
        <GenreCheckboxContainer
          key={ genreName }
          genreName={ genreName }
        />
      )
    )
  }

  renderAdult() {
    return GENRES_ADULT.map( genreName => (
        <GenreCheckboxContainer
          key={ genreName }
          genreName={ genreName }
        />
      )
    )
  }

  render() {
    return (
      <>
        <div
          className="FilterBar-genre-header"
        >
          Genre
        </div>
        <div
          className="FilterBar-genre-section"
        >
          { this.renderMain() }
        </div>
        <div
          className="FilterBar-genre-header"
        >
          Demo
        </div>
        <div
          className="FilterBar-genre-section"
        >
          { this.renderDemos() }
        </div>
        <div
          className="FilterBar-genre-header"
        >
          Theme
        </div>
        <div
          className="FilterBar-genre-section"
        >
          { this.renderThemes() }
        </div>
        <div
          className="FilterBar-genre-header"
        >
          Adult
        </div>
        <div
          className="FilterBar-genre-section"
        >
          { this.renderAdult() }
        </div>
      </>
    )
  }
};

export default GenresRow;
