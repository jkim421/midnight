import React from 'react';

const CategoryCheckbox = ({ categoryId, categoryName, checkedBox, handleCheck }) => {
  return (
    <>
      <input
        className="FilterBar-category-box"
        type="checkbox"
        id={`checkbox-${categoryId}`}
        defaultChecked={ checkedBox(categoryId) }
        onChange= { () => handleCheck(categoryId) }
      />
      <label
        className="FilterBar-category-label"
        htmlFor={`checkbox-${categoryId}`}
      >
        { categoryName }
      </label>
    </>
  )
};

export default CategoryCheckbox;
