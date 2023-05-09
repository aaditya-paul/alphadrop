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
        <div className="h-full md:w-5/6 p-1 md:p-5 pt-0 mt-0 m-1">
          <Cards />
          {/* categories */}
          <Categories />
        </div>
      </div>
    </>
  );
}

export default index;
