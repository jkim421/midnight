import React from 'react';
import { PulseLoader } from 'react-spinners';

class GenreCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.genres.includes(this.props.genreName),
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { genres, genreName } = this.props;
    const isSelected = this.state.selected;
    this.setState({
      selected: !isSelected,
    }, () => {
      if (genres.includes(genreName)) {
        this.props.removeGenre(genreName);
      } else {
        this.props.addGenre(genreName);
      }
    });
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
          checked={this.state.selected}
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
