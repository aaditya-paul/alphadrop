import Image from "next/image";
import React from "react";
import Blog1 from "../assets/blogs/blog1.jpg";

function Featured() {
  return (
    <>
      {/* Featured Post */}

      <div className="flex flex-col lg:flex-row break-normal justify-center mb:3 md:mb-5">
        <div>
          <Image
            src={
              "https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1238&dpr=1"
            }
            alt="blog1"
            style={{
              objectFit: "cover",
            }}
            width={2200}
            height={1238}
            className=" rounded-xl scale-100 md:scale-100 md:hover:scale-105 transition ease-linear "
          />
        </div>
        <div className="lg:pl-7 lg:p-0 pt-1 ">
          <h1 className="text-lg md:text-3xl font-sigmar text-purple-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <h1 className="text-md md:text-lg font-poppins text-slate-300 pt-3 md:pt-5 break-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            laborum illum consequuntur, enim necessitatibus mollitia, possimus
            dolores tempora, hic magni sed voluptas nisi rerum numquam molestias
            non corporis. Repellat ratione odio voluptate officiis possimus
            impedit, repellendus officia explicabo aspernatur, ullam alias
            aliquid perferendis perspiciatis quam tenetur qui suscipit?
          </h1>
          <div className="flex my-5">
            <button className="bg-violet-500 hover:bg-violet-600 py-3 px-10 md:py-3 md:px-16 rounded-md font-sigmar text-white">
              BUY
            </button>
            <button className="mx-5 border-2 hover:bg-violet-500 border-violet-500 py-3 px-5 md:py-3 md:px-8 rounded-md font-sigmar text-white">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
