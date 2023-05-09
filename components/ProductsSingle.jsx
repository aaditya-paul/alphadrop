import SwiperUtil from "@/partials/Slider";
import Image from "next/image";
import React from "react";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "Praesent in felis ut velit ultricies rutrum quis non lectus.",
    image:
      "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "Slide 4",
    description:
      "Fusce bibendum elit sit amet lectus facilisis, ut placerat sapien.",
    image:
      "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
];

function ProductSingle({slug}) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row break-normal justify-center mt-2 md:mt-0 mb:3 md:mb-5">
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
    </div>
  );
}

export default ProductSingle;
