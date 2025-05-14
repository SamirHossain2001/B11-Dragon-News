import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <Suspense
      fallback={
        <span className="loading loading-spinner text-error my-10"></span>
      }>
      <Categories></Categories>
    </Suspense>
  );
};

export default LeftAside;
