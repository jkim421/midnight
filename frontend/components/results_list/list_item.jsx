import React from 'react';

const ListItem = ({ show }) => {
  return (
    <li className="ListItem-li">
      <div className="ListItem-img-container">
        <a href={ show.url }>
          <img className="ListItem-img" src={ show.img_url }/>
        </a>
      </div>
      <div className="ListItem-show">
        <a className="ListItem-title" href={ show.url }>
          { show.title }
        </a>
        <div className="ListItem-details">
          <div>
            Score: { show.score }
          </div>
          <div>
            { show.type }
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
  return (
    genres.map(genre => {
      return (
        <li className="ListItem-genre" key={ genre }>{ genre }</li>
      )
    })
  )
};

export default ListItem;
