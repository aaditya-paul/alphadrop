import React from "react";
import Featured from "./Featured";
import BestSellers from "@/components/BestSellers";
import Link from "next/link";

function Cards() {
  return (
    <div>
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
