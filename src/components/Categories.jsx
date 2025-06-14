import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  //   console.log(categoryPromise);
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn bg-base-100 border-0 font-semibold text-accent hover:bg-base-200"
            }
            to={`/category/${category.id}`}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
