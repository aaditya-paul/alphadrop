import React from "react";
import Featured from "./Featured";
import Posts from "@/components/Posts";

function Cards() {
  return (
    <div className="h-full md:w-5/6 p-1 md:p-5 m-1">
      <Featured />
      {/* line */}
      <div className="border border-dotted border-fuchsia-500"></div>
      <Posts />
    </div>
  );
}

export default Cards;
