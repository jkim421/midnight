import React from 'react';

const ListItem = ({ show }) => {
  return (
    <li className="ListItem-li">
      <div className="ListItem-img-container">
        <a href={ show.url } target="_blank">
          <img className="ListItem-img" src={ show.img_url }/>
        </a>
      </div>
      <div className="ListItem-show">
        <a
          className="ListItem-title"
          href={ show.url }
          target="_blank"
        >
          { show.title }
        </a>
        <div className="ListItem-details">
          <div className="ListItem-score">
            MAL: { show.score ? show.score : "n/a" }
          </div>
          <div className="ListItem-type">
            { show.type }
          </div>
          <div className="ListItem-years">
            { renderDate(show.start_date, show.end_date) }
          </div>
        </div>
        <ul className="ListItem-genres">
          { renderGenres(show.genres) }
        </ul>
      </div>
    </li>
  )
};

const renderGenres = (genres) => {
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

const renderDate = (startStr, endStr) => {
  const start = startStr ? startStr.slice(0, 4) : "?";
  const end = endStr ? endStr.slice(0, 4) : "?";
  const dates = start === end ? start : (start + " - " + end);

  return dates;
};

export default ListItem;
