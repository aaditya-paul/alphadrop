import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Products 💫",
    url: "/products",
  },
  {
    name: "Your Orders",
    url: "/your-orders",
  },
  {
    name: "Customer Care",
    url: "/customer-care",
  },
  {
    name: "Legal Policies",
    url: "/legal-policies",
  },
];

function SideBar() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className={`hidden md:block fixed top-0 right-0 md:2/6 lg:w-1/6 h-full bg-black `}
      >
        <div className="h-full items-start flex justify-center pt-12 border-l-violet-500  border-l-2">
          <nav>
            <ul className="max-w-lg flex flex-col items-center align-middle h-full justify-evenly">
              {items.map((e, i) => {
                return (
                  <>
                    <Link
                      className="my-2 p-3 w-full border border-b-2 border-b-violet-500 group hover:border-b-white transform ease-linear duration-300 border-transparent"
                      href={e.url}
                    >
                      <h1 className="font-sigmar text-slate-300 group-hover:-translate-y-1 transform ease-linear duration-150">
                        {e.name}
                      </h1>
                    </Link>
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="block md:hidden">
        <button
          onClick={() => {
            setModal(!modal);
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            className="text-violet-400"
          />
        </button>
      </div>

      <div
        className={
          modal
            ? "block md:hidden absolute top-28 left-0 h-full w-full p-2 bg-black z-50 transition ease-in-out delay-200 "
            : "hidden "
        }
      >
        <nav>
          <ul className="flex flex-col items-center align-middle h-full justify-evenly px-16 py-9">
            {items.map((e, i) => {
              return (
                <>
                  <Link
                    className="my-2 p-3 w-full border border-b-2 border-b-violet-500 group hover:border-b-white transform ease-linear duration-300 border-transparent"
                    href={e.url}
                  >
                    <h1 className="font-sigmar text-slate-300 group-hover:-translate-y-1 transform ease-linear duration-150">
                      {e.name}
                    </h1>
                  </Link>
                </>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
