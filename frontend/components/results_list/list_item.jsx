import React from 'react';

const ListItem = ({ show }) => {

  return (
    <li className="ListItem-li">
      <a href={ show.url }>{ show.title }</a>
      <div>
        { show.type }
      </div>
      <div>
        { show.score }
      </div>
      <div>
        { show.genres }
      </div>
    </li>
  )
};

export default ListItem;
