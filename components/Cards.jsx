import React from "react";
import Featured from "./Featured";
import BestSellers from "@/components/BestSellers";
import Link from "next/link";

function Cards() {
  return (
    <div className="h-full md:w-4/6 lg:w-5/6 p-1 md:p-5 m-1 mt-2 md:mt-5">
      {/* Featured */}
      <Featured />
      {/* line */}
      <div className="border border-solid border-fuchsia-500"></div>
      {/* Bestsellers */}
      <BestSellers />
      {/* more */}
    </div>
  );
}

export default Cards;
