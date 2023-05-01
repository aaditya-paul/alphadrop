import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/logo.png";
import SideBar from "@/partials/SideBar";

function Header() {
  return (
    <div>
      <nav className="md:w-5/6 flex justify-between px-5 pt-3 lg:px-9 lg:pt-3 items-center">
        <Link href="/">
          <Image src={Logo} alt="Alphadrop" width={80} height={80} />
        </Link>

        <h1 className="font-sigmar mx-auto text-md md:text-xl text-violet-500 lg:text-3xl ">
          ALPHADROP.
        </h1>

        <SideBar />
      </nav>
      <div className="border mt-3 border-violet-500 "></div>
    </div>
  );
}

export default Header;
