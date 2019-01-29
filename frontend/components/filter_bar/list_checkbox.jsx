import React from 'react';

const ListCheckbox = ({ listId, listName, checkedBox, handleCheck }) => {
  debugger
  return (
    <>
      <input
        className="FilterBar-list-box"
        type="checkbox"
        id={`checkbox-${listId}`}
        defaultChecked={ checkedBox(listId) }
        onChange= { () => handleCheck(listId) }
      />
      <label
        className="FilterBar-list-label"
        htmlFor={`checkbox-${listId}`}
      >
        { listName }
      </label>
    </>
  )
};

export default ListCheckbox;
