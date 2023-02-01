import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="font-semibold text-xl mb-8 border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link href={`/category/${category.slug}`} key={index}>
          <span
            className={`block pb-3 mb-3 cursor-pointer ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            }`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
