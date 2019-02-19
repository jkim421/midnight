import React from 'react';
import { LIST_CATEGORIES } from '../../selectors/defined_tags';
import { ClipLoader } from 'react-spinners';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLoaded: false,
      selected: false,
    }
    this.toggleSelect = this.toggleSelect.bind(this);
    this.handleImgLoad = this.handleImgLoad.bind(this);
  }

  handleImgLoad() {
    this.setState({
      imgLoaded: true,
    });
  }

  renderImgLoader() {
    if (this.state.imgLoaded) {
      return null;
    } else {
      return (
        <div className="ListItem-loader">
          <ClipLoader />;
        </div>
      )
    }
  };

  isSelected() {
    if (this.props.selected) return "ListItem-selected";
  }

  toggleSelect() {
    if (this.props.selected) {
      this.props.removeSelected(this.props.show);
    } else {
      this.props.addSelected(this.props.show);
    }
  }

  displayTitle(title) {
    if (title.length > 50) {
      return title.slice(0, 48) + "..."
    } else {
      return title;
    }
  }

  displaySelectOption() {
    if (this.props.selected) {
      return "REMOVE";
    } else {
      return "ADD";
    }
  }

  renderDate(startStr, endStr) {
    const start = startStr ? startStr.slice(0, 4) : "?";
    const end = endStr ? endStr.slice(0, 4) : "?";
    const dates = start === end ? start : (start + "-" + end);

    return dates;
  };

  renderScore(score) {
    const scoreStr = String(score);

    if (!score) {
      return null;
    } else if (scoreStr.length === 1) {
      return "MAL: " + scoreStr + ".00";
    } else if (scoreStr.length === 3) {
      return "MAL: " + scoreStr + "0";
    } else {
      return "MAL: " + scoreStr;
    }
  }

  renderGenres(genres) {
    if (genres) {
      return (
        genres.map(genre => {
          return (
            <li
              className="ListItem-genre-container"
              key={ genre }
              onClick={ () => this.updateGenre(genre) }
            >
              <div
                className={`ListItem-genre ${this.selectedGenre(genre)}`}
              >
                { genre }
              </div>
            </li>
          )
        })
      )
    } else {
      return 'Untagged';
    }
  };

  updateGenre(genre) {
    if (this.props.genres.includes(genre)) {
      this.props.removeGenre(genre);
    } else {
      this.props.addGenre(genre);
    }
  }

  selectedGenre(genre) {
    if (this.props.genres.includes(genre)) {
      return "ListItem-genre-selected";
    } else {
      return null;
    }
  }

  render() {
    const { show } = this.props;
    const imgShow = this.state.imgShow;
    return (
      <>
        <li
          className="ListItem-li"
        >
          <div
            className={`ListItem-container ${ this.isSelected() }`}
          >
            <div className="ListItem-img-container">
              { this.renderImgLoader() }
              <a className="ListItem-img-link" href={ show.url } target="_blank">
                <div className="ListItem-img-mal">
                  <div className="ListItem-img-text">
                    Open <br/>
                  MAL
                </div>
              </div>
              <img
                className="ListItem-img"
                src={ show.img_url }
                onLoad={ this.handleImgLoad }
                />
              </a>
            </div>
            <div className="ListItem-show">
              <div className="ListItem-title-container">
                <a
                  className="ListItem-title"
                  href={ show.url }
                  target="_blank"
                  >
                  { this.displayTitle(show.title) }
                </a>
                <div
                  ref={ this.selection }
                  className="ListItem-selection"
                  onClick={ this.toggleSelect }
                >
                  { this.displaySelectOption() }
                </div>
              </div>
              <div className="ListItem-details">
                <div className="ListItem-detail">
                  { show.type }
                </div>
                <div className="ListItem-detail">
                  { this.renderDate(show.start_date, show.end_date) }
                </div>
                <div className="ListItem-detail">
                  { show.rating }
                </div>
                <div className="ListItem-detail">
                  { this.renderScore(show.score) }
                </div>
              </div>
              <div className="ListItem-userlist">
                { LIST_CATEGORIES[show.watching_status] }
              </div>
              <ul className="ListItem-genres">
                { this.renderGenres(show.genres) }
              </ul>
            </div>
          </div>
        </li>
        <div className="ListItem-border-bottom"/>
      </>
    )
  }
}

export default ListItem;
