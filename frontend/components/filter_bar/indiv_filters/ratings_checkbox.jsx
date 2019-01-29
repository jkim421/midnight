import React from 'react';

class RatingsCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkedBox = this.checkedBox.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  checkedBox(rating) {
    if (this.props.ratings.includes(rating)) {
      return "FilterBar-option-selected";
    } else {
      return "";
    }
  }

  handleRating(rating) {
    const ratings = this.props.ratings;
    if (ratings.includes(rating)) {
      this.props.removeRating(rating);
    } else {
      this.props.addRating(rating);
    }
  }

  render() {
    const { ratingName } = this.props;
    return (
      <div
        className={`
          FilterBar-option-div
          ${this.checkedBox(ratingName)}`
        }
        onClick= { () => this.handleRating(ratingName) }
      >
        { ratingName }
      </div>
    )
  }
};

export default RatingsCheckbox;
