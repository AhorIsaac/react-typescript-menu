import React, { FC, ReactElement } from "react";
import { CategoriesComponentProps } from "./App.types";

const Categories: FC<CategoriesComponentProps> = ({
  categories,
  filterItems,
}: CategoriesComponentProps): ReactElement => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="button-33"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
