import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

export function ListDetailed({item}) {
  const router = useRouter();
  return (
    <div>
      {item.map((item, index) => {
        return (
          <>
            <div
              className="w-auto my-5"
              data-aos="zoom-in"
              data-aos-delay={index <= 30 ? index * 100 : 3000}
            >
              <div className="flex flex-col lg:flex-row ">
                <Image
                  data-aos="fade-right"
                  data-aos-duration="700"
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-md "
                  width={400}
                  height={225}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="lg:pt-0 pt-2 lg:px-5">
                  <h1
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="700"
                    className="font-sigmar text-purple-500 text-xl"
                  >
                    {item.title}
                  </h1>
                  <h1
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="700"
                    className="font-poppins block lg:hidden text-md text-slate-300"
                  >
                    {item.about}
                  </h1>
                  <h1
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="700"
                    className="font-poppins hidden lg:block text-md text-slate-300"
                  >
                    {item.details}
                  </h1>
                  <div className="flex my-5">
                    <button
                      href={item.slug}
                      onClick={() => {
                        router.push(`products/${item.slug}`);
                      }}
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      className="bg-violet-500 hover:bg-violet-600 py-1 px-5 md:py-1 md:px-10 rounded-md font-sigmar text-white text-md md:text-md"
                    >
                      <h1 className="">₹ {item.price}</h1>
                    </button>

                    <button
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      className="mx-2 border-2 hover:bg-violet-500 border-violet-500 py-3 px-5 md:py-3 md:px-4 rounded-md font-sigmar text-white text-xs"
                    >
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

export function ListCard({item}) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 ">
      {item.map((item, index) => {
        return (
          <>
            <div
              className="relative group "
              data-aos="zoom-in"
              data-aos-delay={index <= 30 ? index * 100 : 3000}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                className="rounded-md"
                width={400}
                height={225}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-[#0000004d]" />
              <div className="absolute bottom-0 z-40 p-3 ">
                <h1 className=" font-sigmar group-hover:-translate-y-3 transition ease-linear delay-100 pointer-events-none text-violet-400">
                  {item.title}
                </h1>
                <h1 className="font-poppins group-hover:-translate-y-3 transition ease-linear delay-150 pointer-events-none text-slate-300">
                  {item.about}
                </h1>
                <div className="flex  my-5">
                  <button
                    onClick={() => {
                      router.push(`products/${item.slug}`);
                    }}
                    className=" group-hover:-translate-y-3 transition ease-linear delay-200 bg-violet-500 hover:bg-violet-600 py-1 px-5 md:py-1 md:px-10 rounded-md font-sigmar text-white  text-md md:text-md"
                  >
                    ₹ {item.price}
                  </button>

                  <button className=" group-hover:-translate-y-3 transition ease-linear delay-300 mx-2 border-2 hover:bg-violet-500 border-violet-500 py-3 px-5 md:py-3 md:px-4 rounded-md font-sigmar text-white text-xs">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export function ListCategories({item, type}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10  ">
      {item.map((item, index) => {
        return (
          <>
            <Link href={item.url}>
              <div
                data-aos="zoom-in"
                data-aos-delay={index <= 30 ? index * 100 : 3000}
                className="border-2 border-purple-500 p-7 rounded-xl flex justify-center hover:border-violet-400 transform ease-linear "
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="absolute -z-10 opacity-40 rounded-xl"
                  fill
                />
                {item.name}
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
