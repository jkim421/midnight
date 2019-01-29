import React from 'react';

const CategoryCheckbox = ({ categoryId, categoryName, selected, handleCategory }) => {
  return (
    <>
      <div
        className={`FilterBar-categories-div ${selected}`}
        type="checkbox"
        onClick= { () => handleCategory(categoryId) }
      >
        { categoryName }
      </div>
    </>
  )
};

export default CategoryCheckbox;
