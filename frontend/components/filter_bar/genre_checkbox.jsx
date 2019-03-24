import React from 'react';
import { PulseLoader } from 'react-spinners';

class GenreCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const { genres, genreName } = this.props;

    if (genres.includes(genreName)) {
      this.props.removeGenre(genreName);
    } else {
      this.props.addGenre(genreName);
    }
  }

  render() {
    const { genreName } = this.props;

    return (
      <div
        className="FilterBar-genre-div"
      >
        <input
          className="FilterBar-genre-checkbox"
          type="checkbox"
          id={`${genreName}`}
          checked={this.props.genres.includes(genreName)}
          onChange= { () => this.handleClick(genreName) }
        />
        <label
          className="FilterBar-genre-label"
          htmlFor={`${genreName}`}
        >
          {genreName}
        </label>
      </div>
    )
  }
};

export default GenreCheckbox;
