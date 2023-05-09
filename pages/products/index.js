import AllProducts from "@/components/AllProducts";
import Header from "@/components/Header";
import React from "react";

function Products() {
  return (
    <>
      <Header />
      <div className="h-full md:w-5/6 p-1 md:p-5 pt-0 mt-0 m-1">
        <AllProducts />
      </div>
    </>
  );
}

export default Products;
