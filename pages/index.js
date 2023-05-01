import Cards from "@/components/Cards";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import React from "react";

function index() {
  return (
    <>
      <div>
        <Header />
        {/* blogs */}
        <Cards />
        {/* categories */}
        <Categories />
      </div>
    </>
  );
}

export default index;
