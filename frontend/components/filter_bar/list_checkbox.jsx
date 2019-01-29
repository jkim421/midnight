import React from 'react';

const ListCheckbox = ({ listId, listName, checkedBox, handleCheck }) => {
  debugger
  return (
    <>
      <input
        className="FilterBar-list-box"
        type="checkbox"
        id="ptw-checkbox-6"
        defaultChecked={ checkedBox(listId) }
        onChange= { () => handleCheck(listId) }
      />
      <label
        className="FilterBar-list-label"
        htmlFor="ptw-checkbox-6"
      >
        { listName }
      </label>
    </>
  )
};

export default ListCheckbox;
