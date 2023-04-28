import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function SideBar() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="hidden md:block fixed top-0 right-0 w-56 h-full bg-black">
        <div className="h-full items-start flex justify-center pt-12 border-l-violet-500  border-l-2">
          <nav>
            <ul className="flex flex-col items-center align-middle h-full justify-evenly">
              <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
                <Link href="#">
                  <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                    Home
                  </h1>
                </Link>
              </li>
              <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
                <Link href="#">
                  <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                    About Us
                  </h1>
                </Link>
              </li>
              <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
                <Link href="#">
                  <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                    Your Orders
                  </h1>
                </Link>
              </li>
              <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
                <Link href="#">
                  <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                    Customer Care
                  </h1>
                </Link>
              </li>
              <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
                <Link href="#">
                  <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                    Legal Policies
                  </h1>
                </Link>
              </li>
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
            ? "block md:hidden absolute top-28 left-0 h-full w-full p-2 bg-black z-50"
            : "hidden"
        }
      >
        <nav>
          <ul className="flex flex-col items-cent er align-middle h-full justify-evenly px-16 py-9">
            <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
              <Link href="#">
                <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                  Home
                </h1>
              </Link>
            </li>
            <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
              <Link href="#">
                <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                  About Us
                </h1>
              </Link>
            </li>
            <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
              <Link href="#">
                <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                  Your Orders
                </h1>
              </Link>
            </li>
            <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
              <Link href="#">
                <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                  Customer Care
                </h1>
              </Link>
            </li>
            <li className="my-2 p-3 w-full border border-b-2 border-b-violet-500 hover:border-b-white transform ease-linear duration-300 border-transparent">
              <Link href="#">
                <h1 className="font-sigmar text-slate-300 hover:-translate-y-1 transform ease-linear duration-150">
                  Legal Policies
                </h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
