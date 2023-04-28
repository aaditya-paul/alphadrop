import React from "react";
import Image from "next/image";

function List({item}) {
  return (
    <div>
      {item.map((item, index) => {
        return (
          <>
            <div className="w-auto my-5">
              <div className="flex flex-col md:flex-row ">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  className=" w-[22rem] h-[15rem] rounded-md"
                />
                <div className="md:pt-0 pt-2 md:px-5">
                  <h1 className="font-sigmar text-purple-500 text-xl">
                    {item.title}
                  </h1>
                  <h1 className="font-poppins text-md text-slate-300">
                    {item.about}
                  </h1>
                  <div className="flex my-5">
                    <button className="bg-violet-500 hover:bg-violet-600 py-1 px-5 md:py-1 md:px-10 rounded-md font-sigmar text-white text-xs">
                      BUY
                    </button>
                    <button className="mx-2 border-2 hover:bg-violet-500 border-violet-500 py-3 px-5 md:py-3 md:px-4 rounded-md font-sigmar text-white text-xs">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default List;
