import React from "react";
import {ListCategories} from "../partials/List";

const categories = [
  {
    name: "Category #1",
    url: "category-1",
    image:
      "https://images.unsplash.com/photo-1682250391425-0d5eb4290e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Category #2",
    url: "category-2",
    image:
      "https://images.unsplash.com/photo-1682250391425-0d5eb4290e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Category #3",
    url: "category-3",
    image:
      "https://images.unsplash.com/photo-1682250391425-0d5eb4290e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Category #1",
    url: "category-1",
    image:
      "https://images.unsplash.com/photo-1682250391425-0d5eb4290e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Category #2",
    url: "category-2",
    image:
      "https://images.unsplash.com/photo-1682250391425-0d5eb4290e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },

  {
    name: "See more...",
    url: "products",
    image:
      "https://images.unsplash.com/photo-1673767421052-403aa824e47e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

function Categories() {
  return (
    <div className="mt-10 flex justify-center h-full md:w-4/6 lg:w-5/6 p-1 md:p-5 m-1">
      <ListCategories item={categories} />
    </div>
  );
}

export default Categories;
