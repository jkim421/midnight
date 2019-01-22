import React from 'react';

const ListItem = ({ show }) => {

  return (
    <li className="ListItem-li">
      <div>
        { show.type }
      </div>
      <div>
        { show.title }
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
