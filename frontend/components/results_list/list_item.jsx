import React from 'react';
import { LIST_CATEGORIES } from '../../selectors/defined_tags'

const ListItem = ({ show }) => {
  return (
    <li className="ListItem-li">
      <div className="ListItem-img-container">
        <a className="ListItem-img-link" href={ show.url } target="_blank">
          <div className="ListItem-img-mal">
            <div className="ListItem-img-text">
              MAL
            </div>
          </div>
          <img className="ListItem-img" src={ show.img_url }/>
        </a>
      </div>
      <div className="ListItem-show">
        <div className="ListItem-title-container">
          <a
            className="ListItem-title"
            href={ show.url }
            target="_blank"
          >
            { show.title }
          </a>
        </div>
        <div className="ListItem-details">
          <div className="ListItem-type">
            { show.type }
          </div>
          <div className="ListItem-years">
            { renderDate(show.start_date, show.end_date) }
          </div>
          <div className="ListItem-score">
            MAL: { renderScore(show.score) }
          </div>
          <div className="ListItem-userlist">
            { LIST_CATEGORIES[show.watching_status] }
          </div>
        </div>
        <ul className="ListItem-genres">
          { renderGenres(show.genres) }
        </ul>
      </div>
    </li>
  )
};

const renderDate = (startStr, endStr) => {
  const start = startStr ? startStr.slice(0, 4) : "?";
  const end = endStr ? endStr.slice(0, 4) : "?";
  const dates = start === end ? start : (start + " - " + end);

  return dates;
};

const renderScore = score => {
  const scoreStr = String(score);

  if (!score) {
    return "n/a";
  } else if (scoreStr.length === 1) {
    return scoreStr + ".00";
  } else if (scoreStr.length === 3) {
    return scoreStr + "0";
  } else {
    return scoreStr;
  }
}

const renderGenres = genres => {
  if (genres) {
    return (
      genres.map(genre => {
        return (
          <li className="ListItem-genre-container" key={ genre }>
            <div className="ListItem-genre">
              { genre }
            </div>
          </li>
        )
      })
    )
  } else {
    return null;
  }
};

export default ListItem;
